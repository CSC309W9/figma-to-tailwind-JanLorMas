export default function Home() {
  return (
    <div className="w-[1769px] h-[1151px] relative bg-gradient-to-b from-[#db4439] to-[#75241e] overflow-hidden">
      {/* Button */}
      <div className="w-[150px] h-[52px] left-[1567px] top-[58px] absolute">
        <div className="w-[150px] h-[52px] left-0 top-0 absolute bg-[#eaecd7] rounded-[49px]" />
        <div className="left-[55px] top-3 absolute justify-start text-[#db4439] text-base font-black font-['Geist']">Club</div>
      </div>
      {/* Image */}
      <div className="origin-top-left rotate-[10deg] w-[543px] h-[590.40px] left-[1068.69px] top-[226px] absolute">
        {/* <div className="w-[543px] h-[590.40px] left-[88.69px] top-0 absolute bg-[#d9d9d9]" /> */}
        <img className="w-full h-full object-cover left-[81.51px] top-[-57.62px] absolute" src="/images/example.jpg" alt="Example" />
      </div>

      <div className="w-[680px] left-[143px] top-[313px] absolute justify-start text-[#eaecd7] text-[110px] font-black font-['Geist'] leading-[134.20px]">BlaBla Coffe!</div>
      <div className="w-[680px] left-[148px] top-[740px] absolute justify-start text-[#eaecd7] text-[40px] font-semibold font-['Geist'] leading-[48.80px]">Your NO.1 Choice</div>
      <div className="left-[64px] top-[46px] absolute justify-start text-[#eaecd7] text-2xl font-bold font-['Geist']">Home</div>
      <div className="left-[270px] top-[46px] absolute justify-start text-[#eaecd7] text-2xl font-bold font-['Geist']">Menu</div>
      <div className="left-[476px] top-[46px] absolute justify-start text-[#eaecd7] text-2xl font-bold font-['Geist']">Login</div>
      <div className="w-[1804px] h-[102px] left-[-35px] top-[1049px] absolute bg-white" />
      <div className="left-[124px] top-[1083px] absolute justify-start text-[#db4439] text-2xl font-black font-['Geist'] leading-[29.28px]">Contact Information</div>
      <div className="left-[800px] top-[1083px] absolute justify-start text-[#db4439] text-2xl font-black font-['Geist'] leading-[29.28px]">Company Policy</div>
      <div className="left-[1400px] top-[1083px] absolute justify-start text-[#db4439] text-2xl font-black font-['Geist'] leading-[29.28px]">Be our partner today</div>
    </div>
  );
}