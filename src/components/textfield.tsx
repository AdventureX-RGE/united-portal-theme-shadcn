import { Input } from '@/components/ui/input';
import '../styles/global.css';
import type { TextFieldProps } from '@united-portal/apex';

export default ({ className, ...props }: TextFieldProps) => {
  return <Input className={className} {...props} />;
};
