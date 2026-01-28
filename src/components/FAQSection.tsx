import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "Jak dlouho trvá doručení?",
    answer:
      "Vyhotovení úředního překladu: 1–2 pracovní dny od odeslání skenů. Expresní doručení do ČR: cca 10 kalendářních dnů (letecky). Doprava v rámci Číny: cca 3 dny. Celkem doporučujeme objednávat alespoň 3 týdny před odletem, abyste měli jistotu, že vše stihne dorazit i v případě zdržení například na celnici.",
  },
  {
    question: "Stačí mi v Číně mezinárodní řidičský průkaz (IDP)?",
    answer:
      "Bohužel ne. Čínská lidová republika nepodepsala Vídeňskou ani Ženevskou úmluvu o silničním provozu, a proto neuznává mezinárodní řidičské průkazy vydané v ČR (ani jinde v EU). Bez místního ‚Dočasného povolení k řízení' (Temporary Driving Permit) není možné si pronajmout automobil a řízení je nelegální.",
  },
  {
    question: "Je tento postup legální a spolehlivý?",
    answer:
      "Ano. Získáte úředně ověřený překlad od certifikované čínské agentury, který je nezbytným podkladem pro čínskou dopravní policii. Na základě tohoto dokumentu vám po příletu dopravní policie na letišti (nebo na úřadě) vystaví oficiální povolení k řízení.",
  },
  {
    question: "Jak nakládáte se skeny mých dokladů?",
    answer:
      "Skeny vašeho řidičáku neposíláte nám, ale přímo prověřené partnerské agentuře v Číně. My jako zprostředkovatel s vašimi citlivými údaji nepřicházíme do styku, pouze zajišťujeme celý proces a platbu.",
  },
  {
    question: "Na jak dlouho povolení platí?",
    answer:
      "Dočasné povolení k řízení se zpravidla vydává na dobu platnosti vašeho víza, maximálně však na 90 dnů. Je ideální pro turistické cesty nebo krátkodobé pobyty.",
  },
  {
    question: "Co když mi povolení na místě nevydají?",
    answer:
      "I když dodáte perfektní podklady, finální rozhodnutí a vydání dočasného průkazu je vždy v pravomoci konkrétního úředníka čínské dopravní policie. Z naší zkušenosti je při dodržení všech instrukcí (které od nás dostanete v manuálu) úspěšnost velmi vysoká, ale nelze ji 100% garantovat kvůli vyšší moci nebo změně úředních postupů.",
  },
  {
    question: "Kolik stojí vydání samotného průkazu v Číně?",
    answer:
      "Poplatek, který zaplatíte přímo na přepážce čínské dopravní policii, je pouze symbolický – zpravidla 10 RMB (cca 30–35 Kč). Tento správní poplatek není součástí naší služby (hradí se na místě přes Alipay/WeChat nebo v hotovosti) a pokrývá tisk samotné kartičky.",
  },
  {
    question: "Musím v Číně podstoupit zdravotní prohlídku?",
    answer:
      "Nečekejte žádnou nemocnici. Součástí procesu na úřadě je pouze jednoduchý test zraku (hlavně na barvoslepost) a pořízení fotografie obličeje. Často to probíhá přímo v automatickém kiosku v hale úřadu. Celé to zabere asi 5 minut a nepotřebujete k tomu žádné potvrzení od českého lékaře.",
  },
  {
    question: "Domluvím se na úřadě anglicky?",
    answer:
      "Upřímně? Spíše ne. Většina úředníků mluví pouze čínsky, ale na turistických místech už úředníci vědí, co od nich jako cizinec budete chtít, není se tedy potřeba jazykové bariéry obávat. Navíc od nás dostanete základní potřebné fráze napsané v čínštině, ty pak stačí pouze ukázat úředníkovi. Díky tomu proces proběhne hladce i bez znalosti jediného slova čínsky.",
  },
  {
    question: "Co musím mít fyzicky s sebou na úřadě?",
    answer:
      "Překlad českého řidičského průkazu do čínštiny od certifikované agentury, váš platný český řidičský průkaz (bez originálů vám úředník průkaz nevydá), váš cestovní pas s platným vízem/vstupním razítkem a 3 pasové fotografie s bílým pozadím (ne starší než 6 měsíců). Poznámka: Nejsou uznávány řidičské průkazy mladistvých ve zkušební periodě, kdy smí řídit pouze pod dohledem mentora.",
  },
  {
    question: "Jak dlouho strávím na úřadě?",
    answer:
      "Samotný proces u přepážky trvá obvykle 30 až 60 minut. Průkaz vám vytisknou a zalaminují na počkání.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-20 md:py-28 bg-secondary/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Často kladené dotazy
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Odpovědi na nejčastější otázky našich zákazníků
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-2xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-lg border border-border px-6 data-[state=open]:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left text-foreground font-semibold hover:no-underline py-5">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
