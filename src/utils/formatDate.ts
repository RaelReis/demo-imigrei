import { format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

export const postFormatDate = (date: Date | string) => {
  const formated = format(new Date(date), `'em' dd MMM 'de' yyyy`, {
    locale: ptBR,
  });

  const formatedWithMonthUppercase = formated
    .split(" ")
    .map((word, index) => (index === 2 ? word.toUpperCase() : word))
    .join(" ");

  return formatedWithMonthUppercase;
};

export const cardFormatDate = (date: Date | string) => {
  const formated = format(new Date(date), `dd MMM yyyy`, {
    locale: ptBR,
  });

  const formatedWithMonthUppercase = formated
    .split(" ")
    .map((word, index) => (index === 1 ? word.toUpperCase() : word))
    .join(" ");

  return formatedWithMonthUppercase;
};
