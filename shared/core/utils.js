import { format } from 'date-fns';

export const formatDate = (time, formatType = 'dd/mm/yyyy') => format(new Date(time), formatType);