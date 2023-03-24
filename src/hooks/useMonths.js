import moment from "moment";
import "moment/locale/ar"; // import Arabic locale
import "moment/locale/fr"; // import frensh locale

import i18n from "i18next";

export default function useMonths() {
  moment.locale(i18n.language); // set the locale

  return moment.months() ?? [];
}
