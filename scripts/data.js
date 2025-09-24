// Structured content for the ATEXpert blog. The data set is intentionally
// small and hand written – in a real application it could be replaced by an
// API response or a CMS integration.

export const categories = [
  {
    id: 'podstawy-ex',
    title: '1. Podstawy EX i ATEX',
    description:
      'Wprowadzenie dla każdego nowego czytelnika – solidna baza wiedzy i fundament pod SEO.',
    posts: [
      {
        slug: 'co-to-jest-iskrobezpieczenstwo',
        title: 'Co to jest iskrobezpieczeństwo (Ex i)?',
        summary:
          'Poznaj zasady ograniczania energii w obwodach i rolę certyfikowanych komponentów.',
        readTime: '6 min',
        content: [
          {
            type: 'paragraph',
            text: 'Iskrobezpieczeństwo (oznaczenie Ex i) to metoda ochrony przed wybuchem w strefach zagrożonych, która polega na ograniczeniu energii elektrycznej do poziomu niezdolnego do zapalenia mieszaniny wybuchowej.',
          },
          {
            type: 'paragraph',
            text: 'Kluczową rolę odgrywają bariery, zasilacze oraz urządzenia polowe dopasowane parametrami. Wszystkie elementy muszą być certyfikowane i analizowane razem jako tzw. system iskrobezpieczny.',
          },
          {
            type: 'list',
            ordered: false,
            items: [
              'Źródło zasilania ogranicza prąd i napięcie.',
              'Obwód ogranicza indukcyjność i pojemność przewodów.',
              'Urządzenia końcowe posiadają określone parametry wejściowe.',
            ],
          },
          {
            type: 'heading',
            level: 2,
            text: 'Dlaczego dokumentacja jest kluczowa?',
          },
          {
            type: 'paragraph',
            text: 'Dokumentacja systemu Ex i powinna opisywać konfigurację obwodów, limity energetyczne oraz wyniki obliczeń. Zadbaj o aktualność schematów, protokołów i deklaracji, ponieważ to one stanowią podstawę audytu ATEX.',
          },
          {
            type: 'quote',
            text: 'System iskrobezpieczny jest tak solidny, jak najsłabszy element w łańcuchu – od zasilacza, przez przewody, po urządzenie polowe.',
            caption: 'dr inż. Anna Kowalska, audytor ATEX',
          },
          {
            type: 'paragraph',
            text: 'Zastosowanie iskrobezpieczeństwa wymaga stworzenia dokumentacji technicznej, analizy ryzyka oraz właściwego doboru aparatury. W zamian otrzymujemy bardzo wysoki poziom bezpieczeństwa i możliwość serwisowania urządzeń bez wyłączania instalacji.',
          },
        ],
      },
      {
        slug: 'faq-ex',
        title: 'FAQ: 10 najczęstszych pytań o Ex',
        summary:
          'Najczęstsze pytania klientów dotyczące pracy w strefach zagrożonych wybuchem wraz z odpowiedziami inżynierów ATEXpert.',
        readTime: '7 min',
        content: [
          {
            type: 'paragraph',
            text: 'Jakie dokumenty są wymagane przy instalacji urządzeń Ex? Czy można łączyć urządzenia ATEX i IECEx? Co z konserwacją? Zebraliśmy w jednym miejscu pytania, które słyszymy najczęściej podczas audytów i szkoleń.',
          },
          {
            type: 'list',
            ordered: false,
            items: [
              'Jak interpretować strefy zagrożenia 0/1/2 i 20/21/22?',
              'Czy zwykłe urządzenie można przystosować do pracy w Ex?',
              'Jak wygląda obowiązek oznakowania instalacji?',
              'Kto odpowiada za aktualizację dokumentacji technicznej?',
            ],
          },
          {
            type: 'paragraph',
            text: 'Każda odpowiedź bazuje na aktualnych dyrektywach ATEX 114 oraz ATEX 153, a także na normach serii PN-EN/IEC 60079. Zachęcamy do kontaktu, jeśli Twoja sytuacja wymaga indywidualnej analizy.',
          },
        ],
      },
    ],
  },
  {
    id: 'prawo-i-cert',
    title: '2. Prawo i Certyfikacja',
    description:
      'Regulacje, normy, zgodność i rola kluczowych instytucji w systemie ATEX.',
    posts: [
      {
        slug: 'atex-114-vs-153',
        title: 'ATEX 114 vs ATEX 153 – różnice i praktyka',
        summary:
          'Porównanie obowiązków producentów i pracodawców wynikających z dwóch dyrektyw ATEX.',
        readTime: '8 min',
        content: [
          {
            type: 'paragraph',
            text: 'Dyrektywa 2014/34/UE (ATEX 114) nakłada obowiązki na producentów urządzeń przeznaczonych do stosowania w atmosferach wybuchowych. Z kolei ATEX 153 (dyrektywa 1999/92/WE) dotyczy użytkowników końcowych i bezpieczeństwa pracowników.',
          },
          {
            type: 'heading',
            level: 2,
            text: 'Co z praktyką zakładową?',
          },
          {
            type: 'paragraph',
            text: 'W praktyce oznacza to, że dokumentacja producenta powinna trafić do zakładu, a pracodawca musi przygotować ocenę ryzyka oraz instrukcje obsługi. Obie dyrektywy uzupełniają się i wymagają współpracy obu stron.',
          },
        ],
      },
    ],
  },
  {
    id: 'dowodzenie-iskrobezpieczenstwa',
    title: '3. Dowodzenie Iskrobezpieczeństwa (Ex i)',
    description:
      'Najbardziej eksperckie treści, które wyróżnią bloga na tle konkurencji.',
    posts: [
      {
        slug: 'parametry-co-ci',
        title: 'Parametry C₀/L₀ vs Cᵢ/Lᵢ – jak je rozumieć',
        summary:
          'Jak prawidłowo interpretować parametry elementów systemu iskrobezpiecznego i gdzie szukać ograniczeń.',
        readTime: '5 min',
        content: [
          {
            type: 'paragraph',
            text: 'Parametry C₀/L₀ opisują maksymalną pojemność i indukcyjność, jaką może dołączyć system w strefie zagrożonej. Z kolei Cᵢ/Lᵢ to wartości danego urządzenia polowego. Sumaryczne wartości muszą mieścić się poniżej dopuszczalnych limitów.',
          },
          {
            type: 'heading',
            level: 2,
            text: 'Praktyczna wskazówka projektanta',
          },
          {
            type: 'paragraph',
            text: 'Podczas doboru barier należy uwzględnić długość i typ przewodów, dodatkowe elementy bierne oraz margines bezpieczeństwa. Warto korzystać z arkuszy kalkulacyjnych i not aplikacyjnych producentów.',
          },
        ],
      },
    ],
  },
  {
    id: 'urzadzenia-bariery',
    title: '4. Urządzenia, Bariery, Technologie',
    description:
      'Praktyczny przewodnik dla inżyniera, projektanta i automatyka.',
    posts: [
      {
        slug: 'bariery-galwaniczne',
        title: 'Bariery galwaniczne vs zasilacze Ex i',
        summary:
          'Które rozwiązanie wybrać w zależności od aplikacji i wymagań bezpieczeństwa?'
          ,
        readTime: '6 min',
        content: [
          {
            type: 'paragraph',
            text: 'Bariery galwaniczne zapewniają pełną separację obwodów, co eliminuje konieczność uziemienia po stronie strefy bezpiecznej. Zasilacze Ex i są z kolei kompaktowe i tańsze, lecz wymagają kontrolowanego uziemienia.',
          },
          {
            type: 'list',
            ordered: false,
            items: [
              'Bariery galwaniczne – najlepsze dla sygnałów analogowych i cyfrowych o wysokiej dokładności.',
              'Zasilacze Ex i – świetny wybór do prostych obwodów czujnikowych.',
              'Hybrydowe systemy bezpieczeństwa – łączenie rozwiązań dla złożonych aplikacji.',
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'inspekcje-utrzymanie',
    title: '5. Inspekcje i Utrzymanie Ruchu',
    description:
      'Treści dla utrzymania ruchu, serwisu, instalatorów i służb BHP.',
    posts: [
      {
        slug: 'pn-en-60079-17',
        title: 'PN-EN 60079-17 – inspekcje i konserwacja',
        summary:
          'Jak planować przeglądy, dokumentować działania i utrzymywać zgodność z normami?',
        readTime: '9 min',
        content: [
          {
            type: 'paragraph',
            text: 'Norma PN-EN 60079-17 opisuje minimalne wymagania w zakresie inspekcji, konserwacji i napraw aparatury pracującej w strefach Ex. Wyróżnia inspekcje wizualne, zbliżeniowe i szczegółowe.',
          },
          {
            type: 'paragraph',
            text: 'Kluczem do utrzymania bezpieczeństwa jest harmonogram oparty na analizie ryzyka, regularne aktualizacje dokumentacji i szkolenia personelu. Przygotowaliśmy przykładową checklistę, która pomaga w codziennej pracy służb utrzymania ruchu.',
          },
        ],
      },
    ],
  },
  {
    id: 'praktyka-case',
    title: '6. Praktyka i Case Studies',
    description:
      'Realne przykłady z obiektów, audytów i wdrożeń, pokazujące doświadczenie.',
    posts: [
      {
        slug: 'audyt-atex',
        title: 'Jak wygląda audyt ATEX w zakładzie?',
        summary:
          'Etapy przygotowania audytu, najczęstsze niezgodności oraz wnioski z wdrożeń.',
        readTime: '7 min',
        content: [
          {
            type: 'paragraph',
            text: 'Audyt ATEX rozpoczyna się od przeglądu dokumentacji technicznej i oceny ryzyka. Następnie zespół wizytuje instalacje, weryfikuje oznakowanie i stan urządzeń oraz przeprowadza wywiady z personelem.',
          },
          {
            type: 'paragraph',
            text: 'Końcowym etapem jest raport zawierający listę działań naprawczych i plan wdrożenia. Regularne audyty pomagają utrzymać wysoki poziom bezpieczeństwa i przygotowanie do kontroli UDT.',
          },
        ],
      },
    ],
  },
  {
    id: 'nowe-technologie',
    title: '7. Nowe Technologie i Trendy',
    description:
      'Innowacje, które budują wizerunek lidera i wizjonera w branży Ex.',
    posts: [
      {
        slug: 'ethernet-apl',
        title: 'Ethernet-APL w strefach Ex – plusy i minusy',
        summary:
          'Czy nowy standard komunikacji procesowej sprawdzi się w zakładach o podwyższonym ryzyku wybuchu?',
        readTime: '6 min',
        content: [
          {
            type: 'paragraph',
            text: 'Ethernet-APL rozszerza możliwości komunikacji cyfrowej w przemyśle procesowym, zapewniając transmisję danych i zasilanie po jednej parze przewodów. Technologia została zaprojektowana z myślą o strefach Ex.',
          },
          {
            type: 'paragraph',
            text: 'W artykule opisujemy wymagania instalacyjne, zgodność z normami IEC oraz przykłady wdrożeń pilotażowych, które realizowaliśmy wspólnie z producentami aparatury.',
          },
        ],
      },
    ],
  },
  {
    id: 'branze-zastosowania',
    title: '8. Branże i Zastosowania',
    description:
      'Artykuły pod SEO, pokazujące uniwersalność i specyfikę tematu w różnych gałęziach przemysłu.',
    posts: [
      {
        slug: 'atex-w-spozywce',
        title: 'ATEX w spożywce – mąka, cukier, pyły organiczne',
        summary:
          'Jak bezpiecznie eksploatować linie produkcyjne z pyłami organicznymi i uniknąć przestojów?',
        readTime: '5 min',
        content: [
          {
            type: 'paragraph',
            text: 'Branża spożywcza mierzy się z zagrożeniem wybuchu pyłów organicznych. Pyły mąki czy cukru są łatwopalne, a odpowiednie systemy odpylania i monitoringu ograniczają ryzyko zapłonu.',
          },
          {
            type: 'list',
            ordered: false,
            items: [
              'Regularne czyszczenie instalacji transportu pneumatycznego.',
              'Kontrola temperatury łożysk i elementów obrotowych.',
              'Stosowanie urządzeń z certyfikacją ATEX odpowiedniej kategorii.',
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'edukacja-poradniki',
    title: '9. Edukacja i Poradniki',
    description:
      'Dedykowane materiały dla różnych ról w organizacji: od inżyniera do kupca.',
    posts: [
      {
        slug: 'slownik-ex',
        title: 'Mini słownik: najważniejsze pojęcia i skróty Ex',
        summary:
          'Szybkie przypomnienie podstawowych terminów, które pojawiają się w dokumentacji ATEX.',
        readTime: '4 min',
        content: [
          {
            type: 'paragraph',
            text: 'Przygotowaliśmy słownik najczęściej spotykanych terminów: od EPL przez EPL Gb, po EPL Da. Dzięki niemu łatwiej poruszać się po dokumentacji i standardach IEC 60079.',
          },
        ],
      },
    ],
  },
  {
    id: 'materialy-do-pobrania',
    title: '10. Materiały do Pobrania',
    description:
      'Praktyczne narzędzia i szablony, które generują leady i budują bazę kontaktów.',
    posts: [
      {
        slug: 'kalkulator-exi',
        title: 'Kalkulator XLS do dowodzenia Ex i',
        summary:
          'Przykładowy arkusz kalkulacyjny do szybkiego sprawdzenia parametrów iskrobezpiecznych.',
        readTime: '3 min',
        content: [
          {
            type: 'paragraph',
            text: 'Udostępniamy bezpłatny kalkulator, który pomaga zweryfikować, czy dobrane elementy instalacji Ex i spełniają wymagania normy. W artykule opisujemy sposób korzystania z arkusza oraz przykładowe scenariusze.',
          },
        ],
      },
    ],
  },
];

export function findPostBySlug(slug) {
  for (const category of categories) {
    const post = category.posts.find((item) => item.slug === slug);
    if (post) {
      return { ...post, category: category.title };
    }
  }
  return undefined;
}
