import { GetInfoFunctionType } from "../../@types/DownloaderInterfaces";

const getInfo: GetInfoFunctionType = () => ({
  name: 'Mangabat',
  url: 'https://mangabat.com',
  imageUrl: 'image.jpg',
  description: '',
  disabled: false,
  domains: ['mangabat.com', 'readmangabat.com', 'h.mangabat.com'],
});

export default getInfo;
