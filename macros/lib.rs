#![doc = include_str!("./README.md")]
#![warn(missing_docs, unused, clippy::all, unsafe_code)]
#![deny(missing_debug_implementations)]

use proc_macro::TokenStream as T;
use proc_macro2::TokenStream;

mod mass_impl;
mod func_mod;
mod ffi;

/// A macro for implementing a trait for a list of types.
#[proc_macro_attribute]
pub fn mass_impl(cfg: T, input: T) -> T {
    mass_impl::mass_impl(cfg, input).into()
}

/// Simplifies the creation of FFI functions
///
/// # Example
///
/// ```rust
/// # struct JNIEnv<'a>(&'a ());
/// # struct JClass<'a>(&'a ());
/// # struct JString<'a>(&'a ());
/// # struct RawString(*const u8);
/// # #[allow(non_camel_case_types)]
/// # type jstring = *const u8;
/// # impl<'a> JNIEnv<'a> {
/// #     fn get_string(&self, _: &JString<'a>) -> Result<String, ()> { todo!() }
/// #     fn new_string(&self, _: String) -> Result<RawString, ()> { todo!() }
/// # }
/// # impl RawString {
/// #     fn into_raw(self) -> jstring { todo!() }
/// # }
/// #[macros::ffi(type = "system")]
/// pub fn Java_Main_greet<'a>(
///     mut env: JNIEnv<'a>, _class: JClass<'a>, input: JString<'a>
/// ) -> jstring {
///     // First, we have to get the string out of Java. Check out the `strings`
///     // module for more info on how this works.
///     let input: String = env.get_string(&input).expect("Couldn't get java string!").into();
/// 
///     // Then we have to create a new Java string to return. Again, more info
///     // in the `strings` module.
///     let output = env.new_string(
///         format!("Hello, {}!", input)
///     ).expect("Couldn't create java string!");
/// 
///     // Finally, extract the raw pointer to return.
///     output.into_raw()
/// }
/// ```
#[proc_macro_attribute]
pub fn ffi(cfg: T, input: T) -> T {
    ffi::ffi(cfg, input).into()
}

/// A macro for changing the Signature of a function.
/// depending on feature flags.
/// 
/// # Example
/// 
/// ```rust
/// # type Radian64 = f64;
/// # type Degree64 = f64;
/// /// This function will be marked as `const` if the feature `"unstable"` is enabled.
/// #[macros::func_mod(const => feature = "unstable")]
/// pub fn float_opertation(deg: Degree64) -> Radian64 {
///     deg * 0.01745329252
/// }
/// ```
#[proc_macro_attribute]
pub fn func_mod(cfg: T, input: T) -> T {
    func_mod::func_mod(cfg, input).into()
}
