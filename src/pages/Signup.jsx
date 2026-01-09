
import dashboard from "/dashboard.jpeg";

function Signup() {
  return (
    <div className="min-h-screen bg-[#0B0F1A] text-white flex">

      {/* LEFT SIDE */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 md:px-16">

        {/* Logo */}
        <div className="text-2xl font-bold mb-10">
          FlowReset
        </div>

        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold leading-tight">
          Create your account to start with FlowReset
        </h1>

        {/* Google CTA */}
        <button
  onClick={() => {
    window.location.href =
      "https://app.growthifymedia.com/auth";
  }}
  className="mt-8 w-full bg-white text-black py-4 rounded-xl
             font-semibold flex items-center justify-center gap-3
             hover:opacity-90 transition"
>
  <img
    src="https://www.svgrepo.com/show/475656/google-color.svg"
    className="w-5 h-5"
    alt="Google"
  />
  Sign Up with Google
</button>


        {/* Sign in */}
        <p className="mt-4 text-sm text-gray-400">
          Already have an account?{" "}
         <span
  onClick={() => {
    window.location.href =
      "https://app.growthifymedia.com/auth";
  }}
  className="text-[#FE4C1C] cursor-pointer hover:underline"
>
  Sign in
</span>

        </p>

        {/* Features */}
        <div className="mt-10 space-y-4 text-sm">
          <div className="flex items-center gap-3">
            <span className="text-[#FE4C1C]">✔</span>
            Auto-reset workshop system
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[#FE4C1C]">✔</span>
            Automated reminders & tracking
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[#FE4C1C]">✔</span>
            Clean analytics dashboard
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-12 space-y-4">
          <div className="bg-[#11162A] border border-white/10 rounded-xl p-4 text-sm text-gray-300">
            “FlowReset removed our weekly workshop chaos completely.”
          </div>
          <div className="bg-[#11162A] border border-white/10 rounded-xl p-4 text-sm text-gray-300">
            “We stopped breaking funnels before every workshop.”
          </div>
          <div className="bg-[#11162A] border border-white/10 rounded-xl p-4 text-sm text-gray-300">
            “Show-up rates improved instantly.”
          </div>
        </div>

        {/* Legal */}
        <p className="mt-10 text-xs text-gray-500">
          By continuing, you agree to our{" "}
          <span className="underline cursor-pointer">Terms of Service</span>{" "}
          and{" "}
          <span className="underline cursor-pointer">Privacy Policy</span>.
        </p>
      </div>

      {/* RIGHT SIDE */}
      <div className="hidden lg:flex w-1/2 bg-[#0E1326]
                flex-col justify-center items-center px-16">

  <h2 className="text-4xl font-bold text-center mb-8">
    Reset Your Workshops Automatically
  </h2>

<img
  src={dashboard}
  alt="FlowReset Dashboard"
  className="w-full h-[420px] object-contain bg-[#11162A] rounded-2xl border border-white/10 p-4"
/>

</div>

    </div>
  );
}

export default Signup;
