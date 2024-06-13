import { useTranslation } from "react-i18next";
import { LanguageEnum } from "../constant/type";
import { clientStorage } from "../utils/storage";
import { LANGUAGE_STORAGE_KEY } from "../constant";
import Header from "../layouts/Header";

const Testing = () => {
  const { t, i18n } = useTranslation();
  return (
    <div>
      <Header />
      <button
        onClick={() => {
          const language =
            i18n.language === LanguageEnum.VI
              ? LanguageEnum.EN
              : LanguageEnum.VI;
          i18n.changeLanguage(language);
          clientStorage.set(LANGUAGE_STORAGE_KEY, language);
        }}
      >
        click
      </button>
      <p> {t("common.i18n.vn")}</p>
    </div>
  );
};

export default Testing;
