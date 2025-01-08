import { toAbsoluteUrl } from '@/utils';
const ScreenLoader = () => {
  return <div className="flex flex-col items-center gap-2 justify-center fixed inset-0 z-50 bg-light transition-opacity duration-700 ease-in-out">
      {/* <img className="h-[30px] max-w-none" src={toAbsoluteUrl('/media/app/default-logo.webp')} alt="logo" /> */}
      {<img 
  className="max-w-none" 
  style={{
    height: '130px',
    borderRadius: '18px',
    boxShadow: '0px 0px 20px 0px'
  }} 
  src={toAbsoluteUrl('/media/app/default-logo.webp')} 
  alt="logo" 
/>}
      <div className="text-gray-500 font-medium text-sm">Loading...</div>
    </div>;
};
export { ScreenLoader };