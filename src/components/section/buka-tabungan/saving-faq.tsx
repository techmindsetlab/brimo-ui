import React from "react";
import Paragraph from "@/components/base/paragraph";
import FAQList from "@/components/base/faq-list";
import { DummySavingFAQ } from "@/helper/dummy";
import Button from "@/components/base/button";

interface Props {
  containerStyle: string;
}

const SavingFAQ = ({ containerStyle }: Props) => {
  return (
    <div className={containerStyle}>
      <Paragraph className="text-[3.5rem] leading-[3.5rem] text-primary-blue font-brineue-bold text-center">
        Yang Sering Ditanyain
      </Paragraph>
      <div className="mt-8">
        <FAQList data={DummySavingFAQ} />
      </div>
      <div className="flex justify-center mt-16 mb-32">
        <Button
          buttonText={`Lihat Semua`}
          className={
            "rounded-3xl hidden md:block px-6 py-3 font-brineue-bold text-primary-white text-center font-jakarta bg-primary-blue"
          }
        />
      </div>
    </div>
  );
};

export default SavingFAQ;