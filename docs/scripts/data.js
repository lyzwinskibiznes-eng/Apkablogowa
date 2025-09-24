// Zestaw danych dla bazy wiedzy ATEXpert.
// Każda kategoria zawiera listę postów z treścią przygotowaną przez zespół ekspertów.

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
          'Poznaj zasadę ograniczania energii w obwodach, dzięki której urządzenia pozostają bezpieczne nawet przy zwarciu.',
        readTime: '6 min',
        content: [
          {
            type: 'paragraph',
            text: 'Iskrobezpieczeństwo – oznaczenie Ex i – to metoda ochrony przeciwwybuchowej, która polega na ograniczeniu energii dostępnej w obwodzie do poziomu nieskutkującego zapłonem mieszaniny wybuchowej. Bariery oraz zasilacze Ex i mają za zadanie ograniczyć prąd i napięcie do wartości dopuszczalnych przez normę PN-EN 60079-11.',
          },
          {
            type: 'heading',
            level: 3,
            text: 'Kluczowe elementy systemu Ex i',
          },
          {
            type: 'list',
            ordered: false,
            items: [
              'Źródło zasilania z odpowiednią charakterystyką ograniczającą prąd i napięcie.',
              'Ograniczenie pojemności i indukcyjności w przewodach oraz urządzeniach peryferyjnych.',
              'Certyfikowane urządzenia końcowe – czujniki, przetworniki, pozycjonery – z określonymi parametrami wejściowymi.',
            ],
          },
          {
            type: 'paragraph',
            text: 'Projektant systemu musi udokumentować zgodność układu, obliczyć margines bezpieczeństwa dla C i L oraz przygotować procedury eksploatacji. W zamian otrzymuje możliwość pracy i serwisowania instalacji bez konieczności wyłączania zasilania.',
          },
        ],
      },
      {
        slug: 'podzial-stref-zagrozenia',
        title: 'Podział stref zagrożenia wybuchem: 0/1/2 vs 20/21/22',
        summary:
          'Porównujemy strefy gazowe i pyłowe, wyjaśniając kategorie urządzeń i konsekwencje projektowe.',
        readTime: '7 min',
        content: [
          {
            type: 'paragraph',
            text: 'Dyrektywa ATEX rozróżnia strefy zagrożenia dla gazów (0, 1, 2) oraz pyłów (20, 21, 22). O przynależności decyduje częstotliwość występowania atmosfery wybuchowej – od ciągłej (strefa 0/20) po sporadyczną (strefa 2/22).',
          },
          {
            type: 'paragraph',
            text: 'Dobór urządzeń powinien uwzględniać kategorię sprzętu: 1G/1D dla strefy 0/20, 2G/2D dla stref 1/21 oraz 3G/3D dla stref 2/22. Odmienne są także wymagania dotyczące dokumentacji, przeglądów i uziemienia instalacji.',
          },
          {
            type: 'list',
            ordered: true,
            items: [
              'Określ źródła emisji i kierunek wentylacji.',
              'Przypisz strefę zgodnie z PN-EN 60079-10-1 (gazy) lub PN-EN 60079-10-2 (pyły).',
              'Dobierz urządzenia o odpowiedniej kategorii i klasie temperaturowej.',
            ],
          },
        ],
      },
      {
        slug: 'rodzaje-ochrony-ex',
        title: 'Rodzaje ochrony: Ex i, Ex d, Ex e, Ex nR itd.',
        summary:
          'Przegląd podstawowych typów zabezpieczeń wraz z zastosowaniami i ograniczeniami.',
        readTime: '8 min',
        content: [
          {
            type: 'paragraph',
            text: 'Norma serii IEC 60079 opisuje kilkanaście sposobów zabezpieczenia urządzeń. Najpopularniejsze to: Ex d (ognioodporna obudowa), Ex e (zwiększone bezpieczeństwo), Ex n (urządzenia dla strefy 2), Ex t (ochrona pyłowa) oraz Ex i (iskrobezpieczeństwo).',
          },
          {
            type: 'heading',
            level: 3,
            text: 'Dobór metody ochrony',
          },
          {
            type: 'list',
            ordered: false,
            items: [
              'Ex d sprawdza się w przypadku aparatury o wysokiej energii – silniki, rozruszniki, aparatura wysokoprądowa.',
              'Ex e to rozwiązanie do rozdzielnic, zacisków i elementów, które nie powinny iskrzyć w normalnej pracy.',
              'Ex nR to restricted breathing – ograniczenie wymiany gazów z otoczeniem, popularne w monitoringu drgań.',
            ],
          },
          {
            type: 'paragraph',
            text: 'W praktyce jeden obiekt korzysta z wielu metod. Ważne jest, by zachować kompatybilność i udokumentować dobór w ocenie zagrożenia wybuchem.',
          },
        ],
      },
      {
        slug: 'roznice-gas-vs-dust',
        title: 'Różnice Gas vs Dust',
        summary:
          'Pyły i gazy zachowują się inaczej – zobacz jak wpływa to na projektowanie, detekcję i konserwację.',
        readTime: '5 min',
        content: [
          {
            type: 'paragraph',
            text: 'Mieszaniny gazowe tworzą atmosferę wybuchową w całej objętości pomieszczenia, natomiast pyły osiadają na powierzchniach i tworzą chmury przy naruszeniu warstwy. Pyły przewodzą ciepło gorzej i mogą żarzyć się długo po zapłonie.',
          },
          {
            type: 'paragraph',
            text: 'Dla pyłów kluczowe jest ograniczenie temperatury powierzchni urządzeń oraz zapobieganie gromadzeniu się warstw. Dlatego norma PN-EN 60079-31 wprowadza limity dla grubości pyłu i temperatury T.',
          },
          {
            type: 'list',
            ordered: false,
            items: [
              'Oznaczenia EPL różnią się literą: Gb/Gc dla gazów oraz Db/Dc dla pyłów.',
              'Urządzenia dla pyłów muszą być pyłoszczelne – IP6X to często za mało, wymagane są testy IEC.',
              'Dla gazów większe znaczenie ma klasa temperaturowa T1–T6 i minimalna energia zapłonu.',
            ],
          },
        ],
      },
      {
        slug: 'mity-o-atex',
        title: 'Mity o ATEX i iskrobezpieczeństwie – obalamy',
        summary:
          'Najczęściej spotykane przekonania na audytach ATEX i dlaczego mogą być niebezpieczne.',
        readTime: '6 min',
        content: [
          {
            type: 'paragraph',
            text: 'Mit 1: „Wystarczy wysoki stopień IP”. Prawda: ochrona IP dotyczy jedynie pyłów i wody, a nie zapobiegania zapłonowi. Mit 2: „Każde urządzenie Ex pasuje wszędzie”. Tymczasem liczy się kategoria urządzenia, klasa temperaturowa oraz grupa wybuchowości.',
          },
          {
            type: 'paragraph',
            text: 'Mit 3: „Bariera jest potrzebna tylko przy długich kablach”. Bariera Ex i jest obowiązkowa zawsze, gdy urządzenie polowe ma certyfikat Ex ia/ib, niezależnie od długości przewodu. Błędne założenia skutkują brakiem zgodności i ryzykiem dla personelu.',
          },
          {
            type: 'quote',
            text: 'Kultura bezpieczeństwa zaczyna się od obalania mitów. Regularne szkolenia minimalizują liczbę błędów eksploatacyjnych.',
          },
        ],
      },
      {
        slug: 'faq-ex',
        title: 'FAQ: 10 najczęstszych pytań klientów o Ex',
        summary:
          'Zebraliśmy odpowiedzi na pytania, które pojawiają się podczas audytów, szkoleń i konsultacji technicznych.',
        readTime: '9 min',
        content: [
          {
            type: 'paragraph',
            text: 'Jak dobrać dokumentację? Czy można łączyć certyfikaty ATEX i IECEx? Co z utylizacją urządzeń? Odpowiadamy na dziesięć pytań, które regularnie słyszymy w zakładach.',
          },
          {
            type: 'list',
            ordered: true,
            items: [
              'Czy znakowanie Ex jest obowiązkowe na każdej obudowie? – Tak, wraz z kategorią i numerem certyfikatu.',
              'Czy można stosować sprzęt ATEX w strefie IECEx? – Tak, jeżeli wymagania EPL są spełnione i dokumentacja to potwierdza.',
              'Jak długo przechowywać DTR? – Minimum 10 lat od wprowadzenia urządzenia do obrotu.',
              'Czy zwykły laptop może wejść do strefy 2? – Tylko z odpowiednimi środkami kontroli atmosfery i procedurą zezwoleń.',
            ],
          },
          {
            type: 'paragraph',
            text: 'Pełną listę odpowiedzi wraz z odniesieniami do norm znajdziesz w naszym arkuszu FAQ dostępnych materiałów.',
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
        title: 'ATEX 114 vs ATEX 153 – różnice i praktyka w Polsce',
        summary:
          'Porównanie obowiązków producentów i użytkowników końcowych wynikających z dwóch dyrektyw ATEX.',
        readTime: '8 min',
        content: [
          {
            type: 'paragraph',
            text: 'ATEX 114 (2014/34/UE) dotyczy producentów, którzy wprowadzają sprzęt na rynek UE, natomiast ATEX 153 (1999/92/WE) określa obowiązki pracodawców i użytkowników instalacji. Obie dyrektywy wzajemnie się uzupełniają i wymagają spójnej dokumentacji.',
          },
          {
            type: 'paragraph',
            text: 'W Polsce implementację zapewnia rozporządzenie Ministra Rozwoju z 2016 r. oraz rozporządzenie w sprawie minimalnych wymagań BHP. W praktyce oznacza to, że producent przygotowuje dokumentację techniczną i deklarację zgodności, a użytkownik tworzy ocenę ryzyka i instrukcje eksploatacji.',
          },
          {
            type: 'list',
            ordered: false,
            items: [
              'ATEX 114 → certyfikacja jednostki notyfikowanej, moduły oceny zgodności, oznakowanie CE oraz Ex.',
              'ATEX 153 → analiza ryzyka, klasyfikacja stref, szkolenia pracowników i plan awaryjny.',
              'Wspólnym elementem są audyty UDT oraz kontrola dokumentacji przez służby BHP.',
            ],
          },
        ],
      },
      {
        slug: 'polskie-akty-prawne',
        title: 'Polskie akty prawne i odniesienia do PN-EN/IEC 60079',
        summary:
          'Zestawienie najważniejszych przepisów krajowych, które regulują eksploatację urządzeń w strefach Ex.',
        readTime: '7 min',
        content: [
          {
            type: 'paragraph',
            text: 'Poza dyrektywami unijnymi obowiązują krajowe akty prawne: Prawo energetyczne, ustawa o dozorze technicznym, rozporządzenia dotyczące BHP oraz transportu. Uzupełniają je Polskie Normy z serii PN-EN 60079 (identyczne z IEC 60079).',
          },
          {
            type: 'paragraph',
            text: 'Z praktycznego punktu widzenia warto opracować listę norm referencyjnych w dokumentacji zakładu: PN-EN 60079-0, -10-1, -10-2, -14, -17, -19 oraz -31. Pozwala to zminimalizować wątpliwości przy audytach UDT lub PCA.',
          },
          {
            type: 'quote',
            text: 'Aktualny wykaz norm można uzyskać w Polskim Komitecie Normalizacyjnym – pamiętaj, że odwołania w dokumentacji muszą wskazywać numer i rok wydania.',
          },
        ],
      },
      {
        slug: 'rola-udt-pca',
        title: 'Rola UDT i PCA w systemie ATEX',
        summary:
          'Wyjaśniamy kompetencje Urzędu Dozoru Technicznego i Polskiego Centrum Akredytacji w obszarze ATEX.',
        readTime: '5 min',
        content: [
          {
            type: 'paragraph',
            text: 'UDT sprawuje nadzór nad eksploatacją urządzeń technicznych, w tym nad oceną zgodności instalacji w strefach Ex. PCA akredytuje laboratoria i jednostki certyfikujące, które przeprowadzają badania urządzeń oraz audyty systemów jakości.',
          },
          {
            type: 'paragraph',
            text: 'W praktyce oznacza to, że dokumenty wystawione przez jednostki bez akredytacji PCA mogą zostać zakwestionowane. Przy odbiorze instalacji należy przedstawić aktualne certyfikaty, raporty z badań oraz dowody kompetencji personelu.',
          },
          {
            type: 'list',
            ordered: false,
            items: [
              'UDT – kontrola urządzeń, zatwierdzanie dokumentacji, wydawanie decyzji zezwalających na eksploatację.',
              'PCA – akredytacja laboratoriów badawczych, jednostek certyfikujących i inspekcyjnych.',
              'Współpraca – audyty zintegrowane, wymiana informacji o niezgodnościach i zaleceniach pokontrolnych.',
            ],
          },
        ],
      },
      {
        slug: 'weryfikacja-certyfikatow-atex',
        title: 'Jak weryfikować certyfikaty ATEX/IECEx (fake certyfikaty, checklista)',
        summary:
          'Procedura krok po kroku, która pozwala uniknąć podrobionych certyfikatów i wątpliwej dokumentacji.',
        readTime: '6 min',
        content: [
          {
            type: 'paragraph',
            text: 'Fałszywe certyfikaty to realne ryzyko. Zawsze sprawdzaj numer jednostki notyfikowanej oraz podpisy elektroniczne. W przypadku systemu IECEx korzystaj z oficjalnej bazy danych (www.iecex.com).',
          },
          {
            type: 'list',
            ordered: true,
            items: [
              'Zweryfikuj, czy jednostka wydająca certyfikat figuruje na liście NANDO lub w bazie IECEx.',
              'Porównaj dane identyfikacyjne urządzenia – model, parametry Ex, zakres temperatur – z tabliczką znamionową.',
              'Skontroluj integralność dokumentu (pieczęcie, podpisy, kody QR) oraz aktualność rewizji.',
            ],
          },
          {
            type: 'paragraph',
            text: 'W przypadku wątpliwości poproś producenta o raport z badań typu lub referencje z innych wdrożeń. Brak reakcji to sygnał ostrzegawczy.',
          },
        ],
      },
      {
        slug: 'proces-certyfikacji-urzadzen',
        title: 'Proces certyfikacji urządzeń krok po kroku',
        summary:
          'Od analizy ryzyka po znakowanie CE i Ex – opisujemy kolejne etapy przygotowania urządzenia na rynek.',
        readTime: '9 min',
        content: [
          {
            type: 'paragraph',
            text: 'Producent rozpoczyna od analizy zagrożeń i określenia kategorii urządzenia. Następnie przygotowuje dokumentację techniczną, schematy, listy komponentów oraz wyniki badań. W zależności od modułu oceny zgodności (np. G, D, E) konieczne są badania typu i audyt systemu jakości.',
          },
          {
            type: 'paragraph',
            text: 'Po pozytywnej ocenie jednostki notyfikowanej producent wystawia deklarację zgodności UE, przygotowuje tabliczkę znamionową z oznaczeniem Ex oraz prowadzi archiwum dokumentacji przez minimum 10 lat.',
          },
          {
            type: 'list',
            ordered: true,
            items: [
              'Analiza ryzyka i określenie grupy oraz kategorii sprzętu.',
              'Badania laboratoryjne i weryfikacja konstrukcji.',
              'Audyt systemu jakości (moduł D/E), wydanie certyfikatu, znakowanie CE/Ex.',
            ],
          },
        ],
      },
      {
        slug: 'lifecycle-dokumentacji',
        title: 'Lifecycle dokumentacji: jak tworzyć i utrzymywać DTR/DoC przez 10 lat',
        summary:
          'Praktyczne wskazówki dotyczące archiwizacji i aktualizacji dokumentacji technicznej urządzeń Ex.',
        readTime: '6 min',
        content: [
          {
            type: 'paragraph',
            text: 'Deklaracja zgodności (DoC) oraz dokumentacja techniczno-ruchowa (DTR) muszą być przechowywane co najmniej 10 lat. Dokumenty należy aktualizować przy każdej zmianie konstrukcji lub norm referencyjnych. Warto wdrożyć system zarządzania dokumentacją z kontrolą wersji.',
          },
          {
            type: 'paragraph',
            text: 'W zakładach przemysłowych dobrą praktyką jest prowadzenie repozytorium elektronicznego z kopią offline. Dzięki temu audytorzy UDT lub PCA szybko weryfikują zgodność.',
          },
          {
            type: 'list',
            ordered: false,
            items: [
              'Wyznacz właściciela dokumentacji – zwykle dział konstrukcyjny lub jakości.',
              'Stosuj oznaczenia rewizji i log zmian.',
              'Zapewnij bezpieczne przechowywanie oryginałów oraz kopii cyfrowych.',
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'dowodzenie-iskrobezpieczenstwa',
    title: '3. Dowodzenie Iskrobezpieczeństwa (Ex i)',
    description:
      'Najbardziej eksperckie treści, które wyróżniają bloga na tle konkurencji.',
    posts: [
      {
        slug: 'parametry-co-li',
        title: 'Parametry C₀/L₀ vs Cᵢ/Lᵢ – jak je rozumieć',
        summary:
          'Tłumaczymy, jak interpretować dane z barier Ex i i urządzeń polowych, aby zachować margines bezpieczeństwa.',
        readTime: '7 min',
        content: [
          {
            type: 'paragraph',
            text: 'Parametry C₀ i L₀ określają maksymalną pojemność oraz indukcyjność, jaką bariera Ex i może obsłużyć po stronie strefy zagrożonej. Cᵢ i Lᵢ pochodzą z karty katalogowej urządzenia polowego. Suma pojemności i indukcyjności przewodów, czujnika i akcesoriów nie może przekroczyć C₀/L₀.',
          },
          {
            type: 'paragraph',
            text: 'Pamiętaj o dodatkowych elementach biernych – iskiernikach, filtrach EMC czy rezystorach terminujących. Zawsze dodawaj 10–20% marginesu na niepewność danych katalogowych.',
          },
          {
            type: 'list',
            ordered: false,
            items: [
              'Używaj arkuszy kalkulacyjnych producentów barier, aby uniknąć błędów arytmetycznych.',
              'Zwracaj uwagę na temperaturę pracy – parametry C₀/L₀ mogą się zmieniać.',
              'Dokumentuj każdy obwód w raporcie z dowodzenia iskrobezpieczeństwa.',
            ],
          },
        ],
      },
      {
        slug: 'entity-parameters',
        title: 'Jak czytać entity parameters na tabliczce znamionowej',
        summary:
          'Krok po kroku analizujemy oznaczenia Ui, Ii, Pi oraz Ci/Li, aby uniknąć niezgodności.',
        readTime: '5 min',
        content: [
          {
            type: 'paragraph',
            text: 'Entity parameters określają dopuszczalne wartości napięcia, prądu i mocy dostarczanej do urządzenia. Ich poprawna interpretacja jest warunkiem zgodności systemu Ex i. Na tabliczce znajdziesz symbole Ui, Ii, Pi, Ci oraz Li.',
          },
          {
            type: 'paragraph',
            text: 'Jeśli bariera dostarcza energię większą niż dopuszczalna (np. Ui > Uo bariery), konieczna jest inna konfiguracja lub element pośredni. Pamiętaj, że parametry dotyczą temperatury referencyjnej – przy -40 °C lub +60 °C mogą obowiązywać dodatkowe ograniczenia.',
          },
          {
            type: 'list',
            ordered: false,
            items: [
              'Sprawdź grupę wybuchowości (IIC, IIB, IIA) – wpływa na dopuszczalne wartości.',
              'Zweryfikuj klasę temperaturową (T1–T6) oraz dopuszczalną temperaturę otoczenia.',
              'Notuj dane w karcie obwodu – przyda się przy audycie i serwisie.',
            ],
          },
        ],
      },
      {
        slug: 'typowe-bledy-dowodzenie',
        title: 'Typowe błędy w dowodzeniu (z przykładami schematów)',
        summary:
          'Na podstawie audytów pokazujemy najczęstsze niezgodności i sposoby ich eliminacji.',
        readTime: '8 min',
        content: [
          {
            type: 'paragraph',
            text: 'Najczęstszy błąd to brak rozdzielenia przewodów Ex i od obwodów nieiskrobezpiecznych – nawet przy zachowaniu izolacji fizycznej. Kolejnym problemem jest łączenie kilku urządzeń z jedną barierą bez ponownej weryfikacji parametrów.',
          },
          {
            type: 'paragraph',
            text: 'Na schematach często pomija się rezystory końcowe, co zaniża obliczeniowe wartości C i L. Błąd ten wychodzi na jaw dopiero podczas inspekcji, gdy w obwodzie pojawia się dodatkowe urządzenie serwisowe.',
          },
          {
            type: 'list',
            ordered: true,
            items: [
              'Prowadź rejestr zmian schematów wraz z datą i podpisem odpowiedzialnego inżyniera.',
              'Weryfikuj wszystkie dane w arkuszu kalkulacyjnym i załącz do raportu.',
              'Stosuj system etykietowania przewodów, aby nie pomylić par podczas modernizacji.',
            ],
          },
        ],
      },
      {
        slug: 'przykladowe-obliczenia-exi',
        title: 'Przykładowe obliczenia z XLS (casebook)',
        summary:
          'Udostępniamy przykładowy arkusz kalkulacyjny z trzema typowymi aplikacjami i kompletem wzorów.',
        readTime: '7 min',
        content: [
          {
            type: 'paragraph',
            text: 'Casebook obejmuje obwód czujnika temperatury Pt100, przepływomierza magnetycznego oraz nadajnika poziomu radarowego. W każdym przypadku pokazujemy sposób sumowania pojemności przewodu, czujnika i dodatkowych elementów biernych.',
          },
          {
            type: 'paragraph',
            text: 'Arkusz XLS zawiera zakładki do obliczeń i porównania z parametrami barier. W artykule omawiamy także sposób walidacji wyników poprzez równoległe obliczenia ręczne.',
          },
          {
            type: 'quote',
            text: 'Niezależna walidacja danych minimalizuje ryzyko błędów, dlatego arkusz zawiera wbudowane ostrzeżenia przy zbliżaniu się do limitów C₀/L₀.',
          },
        ],
      },
      {
        slug: 'mapa-bledow-projektowych',
        title: '„Mapa błędów projektowych”: Top 5 błędów w schematach Ex',
        summary:
          'Wizualne zestawienie błędów, które powtarzają się na audytach w zakładach chemicznych i spożywczych.',
        readTime: '6 min',
        content: [
          {
            type: 'paragraph',
            text: 'Mapa błędów pokazuje m.in. brak izolacji przewodów, łączenie ekranów po obu stronach, niewłaściwe uziemienie barier oraz mieszanie urządzeń Ex ia i Ex ib w jednym obwodzie. Każdy przypadek opisujemy w formie krótkiego studium wraz z zalecaną korektą.',
          },
          {
            type: 'list',
            ordered: false,
            items: [
              'Błąd 1 – brak rozdzielenia zacisków Ex i od obwodów standardowych.',
              'Błąd 2 – stosowanie barier z niewystarczającą mocą wyjściową.',
              'Błąd 3 – brak aktualizacji dokumentacji po modernizacji.',
              'Błąd 4 – niewłaściwa klasa temperaturowa czujnika.',
              'Błąd 5 – brak testów ciągłości uziemienia.',
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'urzadzenia-bariery',
    title: '4. Urządzenia, Bariery, Technologie',
    description: 'Praktyczny przewodnik dla inżyniera, projektanta i automatyka.',
    posts: [
      {
        slug: 'bariery-vs-zasilacze',
        title: 'Bariery galwaniczne vs zasilacze Ex i',
        summary:
          'Porównanie kosztów, łatwości instalacji i poziomu bezpieczeństwa w zależności od aplikacji.',
        readTime: '6 min',
        content: [
          {
            type: 'paragraph',
            text: 'Bariery galwaniczne zapewniają pełną separację obwodów, eliminując konieczność uziemienia po stronie bezpiecznej. Zasilacze Ex i (tzw. izolatory zasilające) są bardziej kompaktowe i opłacalne przy wielu kanałach, lecz wymagają kontrolowanego punktu uziemienia.',
          },
          {
            type: 'list',
            ordered: false,
            items: [
              'Bariery galwaniczne – najwyższy poziom bezpieczeństwa, idealne dla sygnałów analogowych o wysokiej dokładności.',
              'Zasilacze Ex i – dobra opcja dla czujników 2-przewodowych oraz sygnałów HART.',
              'Rozwiązania hybrydowe – łączenie obu technologii w zależności od krytyczności sygnału.',
            ],
          },
          {
            type: 'paragraph',
            text: 'Dobór rozwiązania powinien uwzględniać całkowity koszt posiadania – również serwis, moduły redundantne oraz miejsce w szafie sterowniczej.',
          },
        ],
      },
      {
        slug: 'dobor-bariery',
        title: 'Jak dobrać barierę do czujnika/pozycjonera',
        summary:
          'Instrukcja doboru krok po kroku wraz z checklistą parametrów i najczęstszymi pułapkami.',
        readTime: '7 min',
        content: [
          {
            type: 'paragraph',
            text: 'Analizę rozpoczynamy od ustalenia typu sygnału (4–20 mA, NAMUR, HART) oraz wymaganej liczby przewodów. Następnie dobieramy barierę pod kątem Ui, Ii, Pi oraz dopuszczalnej rezystancji obciążenia.',
          },
          {
            type: 'list',
            ordered: true,
            items: [
              'Sprawdź wymagania funkcjonalne czujnika (np. prąd startu, minimalne napięcie).',
              'Zweryfikuj parametry Ex bariery oraz grupę wybuchowości.',
              'Dobierz akcesoria: bezpieczniki, listwy rozdzielcze, moduły diagnostyczne.',
            ],
          },
          {
            type: 'paragraph',
            text: 'Checklistę doboru udostępniamy w sekcji materiałów do pobrania – warto ją wypełniać dla każdego obwodu.',
          },
        ],
      },
      {
        slug: 'porownanie-dostawcow-barier',
        title: 'Porównanie dostawców barier (P+F, R.STAHL, MTL itd.)',
        summary:
          'Analizujemy funkcje diagnostyczne, dostępność modułów redundantnych oraz wsparcie producentów.',
        readTime: '8 min',
        content: [
          {
            type: 'paragraph',
            text: 'Pepperl+Fuchs, R.STAHL i MTL (Eaton) to najpopularniejsi dostawcy barier. Różnice dotyczą m.in. sposobu montażu (na szynie DIN lub w systemach szafowych), wsparcia dla protokołów HART oraz dostępności modułów redundancji.',
          },
          {
            type: 'paragraph',
            text: 'W artykule przedstawiamy tabelę porównawczą z parametrami elektrycznymi, funkcjami diagnostycznymi oraz dostępnością lokalnego serwisu. Omawiamy też koszty cyklu życia – wymianę modułów, aktualizacje firmware i wsparcie posprzedażowe.',
          },
          {
            type: 'quote',
            text: 'Przy wyborze dostawcy liczy się nie tylko cena zakupu, ale również dostępność wsparcia technicznego i gwarancji rozszerzonej.',
          },
        ],
      },
      {
        slug: 'lifecycle-urzadzen-ex',
        title: 'Lifecycle urządzeń Ex: od zakupu do dekomisji',
        summary:
          'Opisujemy etapy życia urządzenia w strefie Ex – od kwalifikacji dostawcy po utylizację.',
        readTime: '6 min',
        content: [
          {
            type: 'paragraph',
            text: 'Lifecycle zaczyna się od oceny ryzyka i specyfikacji technicznej. Następnie realizujemy odbiór dostaw, montaż, uruchomienie, eksploatację, modernizacje i finalnie dekomisję. Każdy etap wymaga dokumentacji i przeglądów zgodnie z PN-EN 60079-17.',
          },
          {
            type: 'list',
            ordered: false,
            items: [
              'Odbiór dostawy – kontrola tabliczki znamionowej, zgodności z zamówieniem i integralności dokumentów.',
              'Eksploatacja – harmonogram przeglądów, archiwizacja raportów, szkolenia personelu.',
              'Dekomisja – usunięcie oznakowania Ex, czyszczenie urządzenia i utylizacja komponentów.',
            ],
          },
        ],
      },
      {
        slug: 'dlaczego-urzadzenie-ex-drozsze',
        title: 'Porównania Ex vs non-Ex: dlaczego urządzenie Ex kosztuje kilka razy więcej?',
        summary:
          'Analiza kosztów konstrukcji, testów i certyfikacji, które wpływają na cenę urządzeń Ex.',
        readTime: '5 min',
        content: [
          {
            type: 'paragraph',
            text: 'Urządzenie Ex wymaga specjalistycznych materiałów (np. iskrobezpieczne złącza, uszczelnienia), badań typu, audytów jakości oraz dodatkowej dokumentacji. Producent ponosi koszty utrzymania certyfikacji i monitorowania zmian w normach.',
          },
          {
            type: 'paragraph',
            text: 'Dzięki temu użytkownik otrzymuje produkt o wyższej niezawodności i mniejszym ryzyku przestojów. W artykule pokazujemy przykładową analizę TCO porównującą urządzenie Ex z wersją standardową.',
          },
          {
            type: 'list',
            ordered: false,
            items: [
              'Koszty projektowe i prototypowanie z udziałem jednostek certyfikujących.',
              'Dodatkowe testy środowiskowe i wibracyjne.',
              'Odpowiedzialność prawna producenta oraz gwarancje rozszerzone.',
            ],
          },
        ],
      },
      {
        slug: 'ex-nr-w-praktyce',
        title: 'Ex nR w praktyce – kiedy restricted breathing ratuje projekt',
        summary:
          'Przykłady zastosowań urządzeń Ex nR w modernizacjach i szybkim retroficie instalacji.',
        readTime: '6 min',
        content: [
          {
            type: 'paragraph',
            text: 'Ex nR ogranicza wymianę gazów z otoczeniem, co zapobiega przedostaniu się mieszaniny wybuchowej do wnętrza obudowy. Sprawdza się przy obudowach analizatorów, modułów komunikacyjnych i urządzeń IIoT montowanych w strefie 2.',
          },
          {
            type: 'paragraph',
            text: 'W artykule omawiamy wymagania dotyczące testów szczelności, procedury okresowych kontroli oraz wpływ warunków środowiskowych (np. wibracje, temperatura) na trwałość zabezpieczenia.',
          },
          {
            type: 'quote',
            text: 'W projektach brownfield Ex nR pozwala skrócić czas wdrożenia, ponieważ często wykorzystuje istniejące okablowanie i szafy.',
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
        slug: 'pn-en-60079-14',
        title: 'PN-EN 60079-14 – projektowanie i instalacja',
        summary:
          'Najważniejsze wymagania normy instalacyjnej wraz z listą kontrolną dla projektantów.',
        readTime: '7 min',
        content: [
          {
            type: 'paragraph',
            text: 'Norma PN-EN 60079-14 opisuje zasady projektowania i montażu instalacji w strefach Ex. Zawiera m.in. wymagania dotyczące kabli, zabezpieczenia przed uszkodzeniami mechanicznymi oraz kontroli jakości wykonania.',
          },
          {
            type: 'paragraph',
            text: 'Projektanci muszą udokumentować dobór urządzeń, sposób prowadzenia przewodów, rozmieszczenie puszek rozgałęźnych oraz metody uziemienia. W artykule omawiamy też często pomijane aneksy – np. dotyczące ogrzewania przewodów.',
          },
          {
            type: 'list',
            ordered: true,
            items: [
              'Określ klasę temperaturową urządzeń w odniesieniu do medium.',
              'Zaprojektuj odpowiednie przepusty kablowe (Ex d, Ex e, Ex t).',
              'Przygotuj plan kontroli jakości montażu i testów odbiorczych.',
            ],
          },
        ],
      },
      {
        slug: 'pn-en-60079-17',
        title: 'PN-EN 60079-17 – inspekcje i konserwacja',
        summary:
          'Jak planować przeglądy, dokumentować działania i utrzymywać zgodność z normą.',
        readTime: '9 min',
        content: [
          {
            type: 'paragraph',
            text: 'PN-EN 60079-17 dzieli inspekcje na wizualne, zbliżeniowe i szczegółowe. Zakres i częstotliwość zależą od wyników oceny ryzyka oraz historii instalacji. Norma wymaga także kwalifikacji personelu i prowadzenia rejestru usterek.',
          },
          {
            type: 'paragraph',
            text: 'W artykule przedstawiamy harmonogram przykładowej rafinerii oraz sposób dokumentowania napraw. Omawiamy również wykorzystanie systemów mobilnych do raportowania usterek w czasie rzeczywistym.',
          },
          {
            type: 'quote',
            text: 'Kluczem do zgodności jest konsekwencja – jedna baza danych usterek i działań korygujących dla całego zakładu.',
          },
        ],
      },
      {
        slug: 'harmonogramy-przegladow',
        title: 'Harmonogramy przeglądów (checklista PDF)',
        summary:
          'Gotowa struktura checklisty dla stref gazowych i pyłowych – do wykorzystania w formie PDF.',
        readTime: '4 min',
        content: [
          {
            type: 'paragraph',
            text: 'Checklista obejmuje podział na urządzenia elektryczne, mechaniczne oraz systemy detekcji. W każdej sekcji znajduje się miejsce na ocenę stanu technicznego, termin kolejnej inspekcji i podpis technika.',
          },
          {
            type: 'list',
            ordered: false,
            items: [
              'Weryfikacja oznakowania Ex i numerów seryjnych.',
              'Kontrola szczelności przepustów oraz stanu kabli.',
              'Sprawdzenie temperatury powierzchni podczas pracy.',
            ],
          },
          {
            type: 'paragraph',
            text: 'Plik PDF jest dostępny w sekcji materiałów do pobrania – można go wypełniać na tablecie lub wydrukować.',
          },
        ],
      },
      {
        slug: 'najczestsze-bledy-inspekcje',
        title: 'Najczęstsze błędy podczas inspekcji (zdjęcia z terenu)',
        summary:
          'Galeria realnych przykładów naruszeń norm wraz z komentarzem eksperta.',
        readTime: '5 min',
        content: [
          {
            type: 'paragraph',
            text: 'Na zdjęciach prezentujemy m.in. otwarte przepusty kablowe, skorodowane obudowy Ex d oraz nieprawidłowe oznaczenia. Każdy przykład zawiera opis ryzyka i sugerowane działanie korygujące.',
          },
          {
            type: 'list',
            ordered: false,
            items: [
              'Luźne śruby pokryw Ex d – ryzyko utraty szczelności płomieniowej.',
              'Zabrudzone elementy optyczne bariery fotoelektrycznej – wpływ na bezpieczeństwo funkcjonalne.',
              'Przewody prowadzone wspólnym korytkiem z obwodami mocy – ryzyko uszkodzenia izolacji.',
            ],
          },
        ],
      },
      {
        slug: 'szablony-protokolow',
        title: 'Szablony protokołów do inspekcji okresowych (Word/PDF)',
        summary:
          'Gotowe szablony raportów, które ułatwiają dokumentowanie przeglądów zgodnie z normą.',
        readTime: '4 min',
        content: [
          {
            type: 'paragraph',
            text: 'Szablony obejmują sekcję danych identyfikacyjnych urządzenia, opis usterek, rekomendacje i podpis osoby odpowiedzialnej. Możesz je dostosować do własnych procedur – pliki Word oraz PDF są w sekcji materiałów do pobrania.',
          },
          {
            type: 'paragraph',
            text: 'Do artykułu dołączamy instrukcję wypełniania dokumentu oraz przykładowy protokół po audycie UDT.',
          },
        ],
      },
      {
        slug: 'czyszczenie-urzadzen-ex',
        title: 'Jak czyścić urządzenia Ex w strefach pyłowych',
        summary:
          'Bezpieczne metody usuwania pyłów i zabrudzeń z urządzeń w wykonaniu Ex.',
        readTime: '5 min',
        content: [
          {
            type: 'paragraph',
            text: 'Czyszczenie urządzeń w strefach pyłowych wymaga procedur eliminujących ryzyko naelektryzowania oraz uszkodzenia uszczelek. Zaleca się stosowanie odkurzaczy Ex, szczotek antystatycznych i odzieży ESD.',
          },
          {
            type: 'list',
            ordered: false,
            items: [
              'Wyłącz urządzenie i upewnij się, że nie ma atmosfery wybuchowej.',
              'Używaj narzędzi antystatycznych i unikaj sprężonego powietrza.',
              'Po czyszczeniu sprawdź uszczelnienia i stan powłok ochronnych.',
            ],
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
        title: 'Jak wygląda audyt ATEX w zakładzie',
        summary:
          'Przebieg audytu krok po kroku – od przygotowania dokumentacji po raport końcowy.',
        readTime: '6 min',
        content: [
          {
            type: 'paragraph',
            text: 'Audyt rozpoczyna się od analizy dokumentacji: ocen ryzyka, instrukcji, schematów oraz protokołów z poprzednich inspekcji. Następnie zespół przeprowadza wizję lokalną, fotografuje niezgodności i przeprowadza wywiady z personelem.',
          },
          {
            type: 'paragraph',
            text: 'Raport końcowy zawiera klasyfikację niezgodności, rekomendacje oraz priorytety działań. Omawiamy, jak przygotować się do audytu, aby zminimalizować czas przestoju i liczbę niespodzianek.',
          },
        ],
      },
      {
        slug: 'roznice-pyl-gaz',
        title: '10 różnic między pyłem a gazem, które psują inspekcje',
        summary:
          'Na podstawie doświadczeń z audytów przedstawiamy kluczowe różnice utrudniające kontrole.',
        readTime: '5 min',
        content: [
          {
            type: 'list',
            ordered: true,
            items: [
              'Pyły tworzą warstwy – trzeba oceniać grubość i temperaturę powierzchni.',
              'Gaz rozprzestrzenia się szybciej, dlatego liczy się wentylacja i detekcja.',
              'Urządzenia dla pyłów wymagają testów mechanicznych uszczelnień, a dla gazów – analiz iskrowych.',
              'Różnice w oznakowaniu EPL (Gb/Gc vs Db/Dc) powodują błędne dobory sprzętu.',
              'Inspekcje pyłowe często pomijają wnętrza obudów, gdzie gromadzi się pył.',
              'Różna dokumentacja – PN-EN 60079-10-1 vs 10-2.',
              'Zastosowanie ochrony przed wyładowaniami elektrostatycznymi.',
              'Dobór środków czyszczących i procedur sprzątania.',
              'Wymagania dla klas temperaturowych T vs maksymalna temperatura powierzchni.',
              'Specyfika prób odbiorczych – np. testy zadziałania odpylaczy.',
            ],
          },
          {
            type: 'paragraph',
            text: 'Uwzględnienie tych różnic w planie inspekcji pozwala uniknąć opóźnień i powtarzania audytów.',
          },
        ],
      },
      {
        slug: 'najczestsze-awarie',
        title: 'Najczęstsze awarie i jak ich unikać',
        summary:
          'Zestawienie awarii spotykanych w zakładach chemicznych, spożywczych i energetyce.',
        readTime: '6 min',
        content: [
          {
            type: 'paragraph',
            text: 'Do najczęstszych awarii należą: uszkodzenia barier na skutek przepięć, korozja obudów Ex d, utrata szczelności przepustów oraz awarie systemów detekcji. Każdą sytuację omawiamy wraz z planem działań zapobiegawczych.',
          },
          {
            type: 'list',
            ordered: false,
            items: [
              'Instaluj ochronę przeciwprzepięciową klasy B+C przed barierami Ex i.',
              'Regularnie kontroluj momenty dokręcania śrub w obudowach Ex d.',
              'Kalibruj czujniki detekcji i testuj systemy alarmowe.',
            ],
          },
        ],
      },
      {
        slug: 'przewodnik-zakupowy',
        title: 'Przewodnik zakupowy: jak dział zakupów powinien wybierać dostawcę',
        summary:
          'Checklista dla działów zakupów – od weryfikacji certyfikatów po klauzule serwisowe.',
        readTime: '5 min',
        content: [
          {
            type: 'paragraph',
            text: 'Zakupy sprzętu Ex wymagają współpracy z działem technicznym. Należy sprawdzić certyfikaty, referencje dostawcy, warunki gwarancji oraz dostępność serwisu. W artykule prezentujemy matrycę oceny ofert.',
          },
          {
            type: 'list',
            ordered: true,
            items: [
              'Zweryfikuj certyfikację ATEX/IECEx oraz zgodność z wymaganiami projektu.',
              'Porównaj koszty dostawy, szkolenia, serwisu i części zamiennych.',
              'Negocjuj klauzule o wsparciu technicznym i dostępności dokumentacji.',
            ],
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
        title: 'Ethernet-APL w strefach EX – plusy i minusy',
        summary:
          'Analizujemy, kiedy Ethernet-APL przyspiesza komunikację procesową, a kiedy lepiej pozostać przy magistralach klasycznych.',
        readTime: '6 min',
        content: [
          {
            type: 'paragraph',
            text: 'Ethernet-APL umożliwia transmisję danych oraz zasilanie po jednej parze przewodów na duże odległości. Standard wspiera urządzenia Ex ia/ib i oferuje przepustowość 10 Mb/s. Omawiamy wymagania dotyczące okablowania i komponentów.',
          },
          {
            type: 'paragraph',
            text: 'Wadą jest konieczność stosowania specjalnych switchy i zasilaczy w wykonaniu Ex oraz kompatybilności wstecznej z magistralą 4–20 mA. W artykule opisujemy hybrydowe topologie łączące HART-IP z klasycznym HART.',
          },
        ],
      },
      {
        slug: 'cyfryzacja-iiot',
        title: 'Cyfryzacja i IIoT w obszarach zagrożonych wybuchem',
        summary:
          'Jak bezpiecznie wdrożyć czujniki IIoT, platformy analityczne i zdalny monitoring w strefach Ex.',
        readTime: '7 min',
        content: [
          {
            type: 'paragraph',
            text: 'Transformacja cyfrowa w strefach Ex wymaga certyfikowanych bramek IoT, bezpiecznych protokołów komunikacji i separacji sieci OT/IT. Omawiamy architekturę referencyjną z kontrolą dostępu i monitoringiem zagrożeń.',
          },
          {
            type: 'list',
            ordered: false,
            items: [
              'Wybieraj urządzenia z certyfikatami Ex i/lub Ex d, które wspierają MQTT lub OPC UA.',
              'Stosuj segmentację sieci i firewalle z funkcjami DPI dla protokołów przemysłowych.',
              'Zadbaj o zarządzanie certyfikatami i aktualizacje OTA zgodne z wymaganiami ATEX.',
            ],
          },
        ],
      },
      {
        slug: 'cyberbezpieczenstwo-ot',
        title: 'Cyberbezpieczeństwo OT w strefach Ex (firewall, PoE, edge computing)',
        summary:
          'Przewodnik po zabezpieczeniach sieciowych w środowiskach, gdzie liczy się zarówno bezpieczeństwo procesowe, jak i cyber.',
        readTime: '6 min',
        content: [
          {
            type: 'paragraph',
            text: 'W strefach Ex coraz częściej stosuje się urządzenia zasilane PoE oraz edge computing. Każdy element musi mieć certyfikację Ex, a jednocześnie spełniać wytyczne IEC 62443. Omawiamy konfigurację firewalli, segmentację VLAN oraz monitorowanie anomalii.',
          },
          {
            type: 'paragraph',
            text: 'Podkreślamy rolę zarządzania łatami i kopii zapasowych konfiguracji. W artykule znajdziesz listę pytań kontrolnych do audytu cyberbezpieczeństwa w zakładzie procesowym.',
          },
        ],
      },
      {
        slug: 'nowe-standardy-iec',
        title: 'Nowe standardy i przyszłość norm IEC/EN',
        summary:
          'Przegląd aktualizacji norm IEC 60079 i EN 60079 oraz kierunki rozwoju standardów w kolejnych latach.',
        readTime: '5 min',
        content: [
          {
            type: 'paragraph',
            text: 'Komitety IEC pracują nad aktualizacjami dotyczącymi urządzeń bezprzewodowych, detekcji gazów oraz cyfrowych narzędzi do dokumentacji. W artykule omawiamy najważniejsze zmiany oraz harmonogram publikacji.',
          },
          {
            type: 'list',
            ordered: false,
            items: [
              'Nowe wymagania dotyczące urządzeń wearable w strefach Ex.',
              'Rozszerzenie norm o zagadnienia cyberbezpieczeństwa.',
              'Integracja z systemami zarządzania bezpieczeństwem procesowym (IEC 61511).',
            ],
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
        slug: 'atex-w-gornictwie',
        title: 'ATEX w górnictwie – specyfika i wymagania',
        summary:
          'Wyjaśniamy, dlaczego górnictwo ma własne grupy wybuchowości i jakie dodatkowe procedury obowiązują.',
        readTime: '6 min',
        content: [
          {
            type: 'paragraph',
            text: 'Górnictwo posługuje się grupą I (metan) i wymaga sprzętu odpornego na pył węglowy oraz wstrząsy. Omawiamy przepisy Wyższego Urzędu Górniczego, dodatkowe wymagania dla urządzeń transportowych i stacji transformatorowych.',
          },
          {
            type: 'paragraph',
            text: 'Ważne są także procedury ewakuacyjne oraz redundancja systemów detekcji metanu. W artykule przedstawiamy przykłady z polskich kopalń.',
          },
        ],
      },
      {
        slug: 'atex-w-petrochemii',
        title: 'ATEX w petrochemii i rafineriach',
        summary:
          'Kluczowe zagadnienia dla rafinerii – od klasyfikacji stref po integrację z systemami SIS.',
        readTime: '6 min',
        content: [
          {
            type: 'paragraph',
            text: 'Rafinerie charakteryzują się rozległą infrastrukturą, mieszaninami węglowodorów i wysoką temperaturą procesów. Omawiamy klasyfikację stref w rejonie kolumn destylacyjnych, pochodni oraz instalacji magazynowych.',
          },
          {
            type: 'paragraph',
            text: 'Opisujemy również współpracę systemów SIS (Safety Instrumented Systems) z aparaturą Ex oraz znaczenie testów proof test.',
          },
        ],
      },
      {
        slug: 'atex-w-spozywce',
        title: 'ATEX w spożywce – mąka, cukier, pyły organiczne',
        summary:
          'Jak projektować linie produkcyjne z pyłami organicznymi i uniknąć przestojów spowodowanych wybuchem.',
        readTime: '5 min',
        content: [
          {
            type: 'paragraph',
            text: 'Branża spożywcza zmaga się z pyłami mąki, cukru i przypraw. W artykule omawiamy wymagania dotyczące odpylania, monitorowania temperatury łożysk oraz zabezpieczeń przed zapłonem w silosach.',
          },
          {
            type: 'list',
            ordered: false,
            items: [
              'Regularne czyszczenie instalacji transportu pneumatycznego.',
              'Systemy detekcji iskier i gaszenia w kanałach odpylających.',
              'Szkolenia personelu w zakresie pracy w strefach pyłowych.',
            ],
          },
        ],
      },
      {
        slug: 'atex-w-farmacji',
        title: 'ATEX w farmacji – produkcja leków i pyły farmaceutyczne',
        summary:
          'Specyfika produkcji farmaceutyków: higiena, pyły wybuchowe i ścisła kontrola procesów.',
        readTime: '6 min',
        content: [
          {
            type: 'paragraph',
            text: 'W farmacji kluczowe są strefy czyste oraz jednoczesne spełnienie wymagań GMP i ATEX. Omawiamy projektowanie systemów odpylania, izolatorów oraz odzieży antystatycznej.',
          },
          {
            type: 'paragraph',
            text: 'W artykule wskazujemy także na rolę walidacji czystości mikrobiologicznej po pracach w strefach Ex.',
          },
        ],
      },
      {
        slug: 'atex-w-logistyce',
        title: 'ATEX w logistyce i silosach',
        summary:
          'Bezpieczne magazynowanie i transport materiałów sypkich oraz paliw płynnych.',
        readTime: '5 min',
        content: [
          {
            type: 'paragraph',
            text: 'Logistyka obejmuje magazyny paliw, terminale przeładunkowe i silosy. Kluczowe są systemy wentylacji, detekcja gazów oraz ochrona przed elektrycznością statyczną.',
          },
          {
            type: 'paragraph',
            text: 'W artykule omawiamy zasady uziemiania cystern, kontrolę stanu filtrów oraz wymagania dla układów odprowadzania ładunków.',
          },
        ],
      },
      {
        slug: 'atex-w-bateriach',
        title: 'ATEX w branży baterii i magazynach energii',
        summary:
          'Nowa gałąź przemysłu – ryzyka związane z elektrolitem i pyłami metali lekkich.',
        readTime: '6 min',
        content: [
          {
            type: 'paragraph',
            text: 'Produkcja baterii litowo-jonowych generuje pyły metali oraz emisję rozpuszczalników. Omawiamy wymagania dotyczące systemów wentylacji, monitoringu temperatury oraz ochrony przeciwpożarowej.',
          },
          {
            type: 'paragraph',
            text: 'Dodatkowe wyzwanie to integracja z systemami BMS i zabezpieczenie przed zwarciami w strefach montażu modułów.',
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
        slug: 'atex-dla-bhp',
        title: 'ATEX dla BHP-owca – co musi wiedzieć',
        summary:
          'Najważniejsze obowiązki służb BHP w zakładach z atmosferami wybuchowymi.',
        readTime: '5 min',
        content: [
          {
            type: 'paragraph',
            text: 'Specjalista BHP powinien znać klasyfikację stref, procedury ewakuacyjne, wymagania dotyczące szkoleń oraz sposób dokumentowania zdarzeń potencjalnie niebezpiecznych. Omawiamy też współpracę z inspektorami UDT i PSP.',
          },
          {
            type: 'list',
            ordered: false,
            items: [
              'Prowadzenie rejestru prac niebezpiecznych.',
              'Koordynacja szkoleń i instruktaży dla pracowników oraz podwykonawców.',
              'Monitorowanie działań korygujących po audytach.',
            ],
          },
        ],
      },
      {
        slug: 'atex-dla-zakupow',
        title: 'ATEX dla działu zakupów – jak nie kupić bubla',
        summary:
          'Praktyczne wskazówki dotyczące oceny ofert i zapisów umownych związanych z urządzeniami Ex.',
        readTime: '4 min',
        content: [
          {
            type: 'paragraph',
            text: 'Dział zakupów powinien współpracować z inżynierami już na etapie specyfikacji. W artykule przedstawiamy listę pytań do dostawcy oraz wzór klauzuli o dostarczeniu kompletu dokumentów Ex.',
          },
          {
            type: 'paragraph',
            text: 'Podkreślamy wagę audytów fabrycznych (FAT) i odbiorów SAT, a także zasady odbioru magazynowego sprzętu Ex.',
          },
        ],
      },
      {
        slug: 'atex-dla-projektanta',
        title: 'ATEX dla projektanta instalacji elektrycznych',
        summary:
          'Kompendium dla projektantów: od analizy ryzyka po dobór kabli i zabezpieczeń.',
        readTime: '6 min',
        content: [
          {
            type: 'paragraph',
            text: 'Projektant odpowiada za spójność dokumentacji: schematów, planów kablowych, opisów technicznych i kosztorysów. Omawiamy rolę koordynacji z branżami mechaniczną oraz automatyki.',
          },
          {
            type: 'list',
            ordered: true,
            items: [
              'Analiza dokumentów: ocena ryzyka, wykaz urządzeń, dane procesowe.',
              'Dobór kabli, przepustów, zabezpieczeń i systemów monitoringu.',
              'Przygotowanie instrukcji montażowych i planu testów funkcjonalnych.',
            ],
          },
        ],
      },
      {
        slug: 'mini-slownik-ex',
        title: 'Mini słownik: najważniejsze pojęcia i skróty Ex',
        summary:
          'Szybkie przypomnienie terminologii – od EPL i EPL Ga po EPL Db oraz moduły oceny zgodności.',
        readTime: '4 min',
        content: [
          {
            type: 'list',
            ordered: false,
            items: [
              'EPL – Equipment Protection Level, poziom ochrony urządzenia.',
              'IP – stopień ochrony przed wnikaniem ciał stałych i wody.',
              'DoC – deklaracja zgodności UE.',
              'FAT/SAT – testy fabryczne i na obiekcie.',
              'SIL – poziom nienaruszalności bezpieczeństwa dla systemów SIS.',
            ],
          },
          {
            type: 'paragraph',
            text: 'Słownik można pobrać jako plakat PDF z sekcji materiałów. Przydatny podczas szkoleń i onboardingu nowych pracowników.',
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
          'Arkusz kalkulacyjny pomagający zweryfikować parametry obwodów iskrobezpiecznych.',
        readTime: '3 min',
        content: [
          {
            type: 'paragraph',
            text: 'Kalkulator zawiera zakładki do obliczeń dla barier analogowych, cyfrowych oraz sygnałów NAMUR. Uwzględnia automatyczne ostrzeżenia przy przekroczeniu parametrów C₀/L₀ oraz możliwość generowania raportu PDF.',
          },
          {
            type: 'paragraph',
            text: 'Do pakietu dołączamy instrukcję użytkowania oraz przykładową kartę obwodu, którą można zaadaptować w dokumentacji zakładowej.',
          },
        ],
      },
      {
        slug: 'checklista-60079-17',
        title: 'Checklista PDF do inspekcji PN-EN 60079-17',
        summary:
          'Lista kontrolna obejmująca ponad 40 punktów kontrolnych dla stref gazowych i pyłowych.',
        readTime: '3 min',
        content: [
          {
            type: 'paragraph',
            text: 'Checklista w formacie PDF/Excel zawiera sekcje dotyczące oględzin wizualnych, zbliżeniowych oraz szczegółowych. Można ją łączyć z systemami CMMS.',
          },
          {
            type: 'list',
            ordered: false,
            items: [
              'Sekcja identyfikacyjna urządzenia (ID, lokalizacja, strefa).',
              'Lista niezgodności z możliwością przypisania działań korygujących.',
              'Automatyczne podsumowanie statusu instalacji.',
            ],
          },
        ],
      },
      {
        slug: 'protokol-inspekcyjny',
        title: 'Protokół inspekcyjny do druku (Word/PDF)',
        summary:
          'Szablon dokumentu ułatwiający raportowanie wyników przeglądów i audytów.',
        readTime: '2 min',
        content: [
          {
            type: 'paragraph',
            text: 'Szablon zawiera pola na dane obiektu, opis usterek, rekomendacje, osoby odpowiedzialne i terminy realizacji. Dostępny w wersji Word oraz w edytowalnym PDF.',
          },
          {
            type: 'paragraph',
            text: 'W artykule opisujemy sposób integracji protokołu z systemem zarządzania dokumentacją oraz przykładowe wpisy.',
          },
        ],
      },
      {
        slug: 'schematy-eplan',
        title: 'Schematy przykładowe w EPLAN/Visio',
        summary:
          'Pakiet plików źródłowych z aktualnymi symbolami Ex i przykładowymi obwodami.',
        readTime: '4 min',
        content: [
          {
            type: 'paragraph',
            text: 'Udostępniamy bibliotekę symboli oraz przykładowe schematy dla obwodów Ex i, Ex d oraz Ex t. Pliki są zgodne z aktualnymi normami i ułatwiają przygotowanie dokumentacji warsztatowej.',
          },
          {
            type: 'paragraph',
            text: 'Dołączamy instrukcję importu do EPLAN i Microsoft Visio oraz wskazówki dotyczące utrzymania szablonów.',
          },
        ],
      },
      {
        slug: 'specyfikacja-dla-zakupow',
        title: 'Przykładowa specyfikacja dla działu zakupów',
        summary:
          'Gotowy wzór specyfikacji technicznej z listą wymagań i kryteriów oceny dostawców.',
        readTime: '3 min',
        content: [
          {
            type: 'paragraph',
            text: 'Specyfikacja zawiera opis urządzenia, wymagania certyfikacyjne, parametry środowiskowe, kryteria oceny ofert oraz klauzule dotyczące dostawy dokumentacji. Można ją wypełnić w arkuszu kalkulacyjnym lub w systemie ERP.',
          },
          {
            type: 'paragraph',
            text: 'Dodatkowe pola obejmują termin dostawy, warunki gwarancji, szkolenia oraz wsparcie serwisowe.',
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
