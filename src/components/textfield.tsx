import { Input } from '@/components/ui/input';
import '../styles/global.css';

export default ({ placeholder = '' }: { placeholder: string }) => {
  return <Input placeholder={placeholder} />;
};
