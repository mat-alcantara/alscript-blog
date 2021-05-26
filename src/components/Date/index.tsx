import { format, parseISO } from 'date-fns';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { ptBR } = require('date-fns/locale');

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function Date({ dateString }: { dateString: string }) {
  const date = parseISO(dateString);
  return (
    <time dateTime={dateString}>{format(date, 'd MMM', { locale: ptBR })}</time>
  );
}
