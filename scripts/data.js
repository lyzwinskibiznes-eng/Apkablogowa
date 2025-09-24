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
        slug: 'podzial-stref-zagrozenia-wybuchu',
        title: 'Podział stref zagrożenia wybuchem: 0/1/2 vs 20/21/22',
        summary:
          'Poznaj różnice między klasyfikacją stref dla gazów i pyłów oraz wymagane dokumenty.',
        readTime: '5 min',
        content: [
          {
            type: 'paragraph',
            text: 'Klasyfikacja stref zagrożenia wybuchem określa, jak często atmosfera wybuchowa może wystąpić w danym miejscu. To podstawowa informacja dla projektantów i służb utrzymania ruchu.',
          },
          {
            type: 'list',
            ordered: false,
            items: [
              'Strefy 0/1/2 dotyczą gazów i par – różnią się prawdopodobieństwem wystąpienia mieszaniny wybuchowej.',
              'Strefy 20/21/22 opisują zagrożenia pyłowe i ich czas ekspozycji.',
              'Dokument klasyfikacji stref powinien być aktualizowany po każdej istotnej zmianie procesu.',
            ],
          },
          {
            type: 'paragraph',
            text: 'Prawidłowe oznakowanie stref oraz komunikacja zasad bezpieczeństwa ograniczają ryzyko błędów operacyjnych i nieplanowanych przestojów.',
          },
        ],
      },
      {
        slug: 'rodzaje-ochrony-ex',
        title: 'Rodzaje ochrony: Ex i, Ex d, Ex e, Ex nR itd.',
        summary:
          'Przegląd podstawowych metod zabezpieczania urządzeń elektrycznych w strefach Ex.',
        readTime: '6 min',
        content: [
          {
            type: 'paragraph',
            text: 'Dyrektywy ATEX dopuszczają wiele rodzajów ochrony, a każdy z nich adresuje inne źródło zapłonu. Dobór wykonania powinien wynikać z analizy ryzyka oraz charakterystyki procesu.',
          },
          {
            type: 'list',
            ordered: false,
            items: [
              'Ex i – ograniczenie energii w obwodzie.',
              'Ex d – wzmocniona obudowa odporna na eksplozję.',
              'Ex e – dodatkowe zabezpieczenia przed iskrzeniem i przegrzaniem.',
              'Ex nR – ograniczona oddychalność obudowy w strefach 2/22.',
            ],
          },
          {
            type: 'paragraph',
            text: 'W praktyce często łączy się kilka metod w ramach jednego systemu, aby uzyskać optymalny kompromis między bezpieczeństwem, kosztami i utrzymaniem.',
          },
        ],
      },
      {
        slug: 'roznice-gas-vs-dust',
        title: 'Różnice Gas vs Dust',
        summary:
          'Na co zwrócić uwagę przy projektowaniu instalacji dla atmosfer gazowych i pyłowych.',
        readTime: '4 min',
        content: [
          {
            type: 'paragraph',
            text: 'Atmosfery gazowe i pyłowe różnią się zachowaniem w procesie zapłonu oraz wymaganiami dotyczącymi ochrony. Błędna klasyfikacja może prowadzić do niedoszacowania ryzyka.',
          },
          {
            type: 'list',
            ordered: false,
            items: [
              'Pyły wymagają szczególnej kontroli temperatury powierzchni.',
              'Gazy częściej wykorzystują rozwiązania typu Ex d i Ex p.',
              'Oznakowanie EPL powinno odzwierciedlać środowisko pracy urządzenia.',
            ],
          },
          {
            type: 'paragraph',
            text: 'Regularne audyty pomagają upewnić się, że dobrane środki ochronne odpowiadają aktualnej charakterystyce medium.',
          },
        ],
      },
      {
        slug: 'mity-o-atex',
        title: 'Mity o ATEX i iskrobezpieczeństwie – obalamy',
        summary:
          'Najczęstsze błędne przekonania dotyczące wymagań ATEX i realiów wdrożeń.',
        readTime: '5 min',
        content: [
          {
            type: 'paragraph',
            text: 'Wokół dyrektyw ATEX narosło wiele mitów utrudniających wdrażanie skutecznych rozwiązań. Warto je skonfrontować z wymaganiami norm i doświadczeniami audytorów.',
          },
          {
            type: 'list',
            ordered: false,
            items: [
              'Certyfikat producenta nie zwalnia z obowiązku oceny ryzyka w zakładzie.',
              'Strefa 2 nie oznacza braku zagrożenia – wymaga odpowiedniej aparatury.',
              'Iskrobezpieczeństwo nie zawsze jest najdroższą opcją, często obniża koszty serwisu.',
            ],
          },
          {
            type: 'paragraph',
            text: 'Świadome podejście do przepisów pozwala uniknąć kosztownych przeróbek i przygotować zakład na kontrolę organów nadzoru.',
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
      {
        slug: 'polskie-akty-prawne-atex',
        title: 'Polskie akty prawne i odniesienia do PN-EN/IEC 60079',
        summary:
          'Sprawdź, jakie ustawy, rozporządzenia i normy regulują bezpieczeństwo przeciwwybuchowe w Polsce.',
        readTime: '6 min',
        content: [
          {
            type: 'paragraph',
            text: 'Przepisy krajowe implementują dyrektywy ATEX i określają szczegółowe wymagania dla pracodawców oraz producentów. Znajomość podstawowych aktów prawnych ułatwia przygotowanie zakładu do kontroli.',
          },
          {
            type: 'list',
            ordered: false,
            items: [
              'Rozporządzenie w sprawie minimalnych wymagań dotyczących bezpieczeństwa i higieny pracy w atmosferze wybuchowej.',
              'Wytyczne UDT i PIP dotyczące nadzoru urządzeń w strefach Ex.',
              'Normy PN-EN/IEC 60079 jako dokumenty zharmonizowane.',
            ],
          },
          {
            type: 'paragraph',
            text: 'Aktualizacje norm i przepisów warto monitorować poprzez publikacje PKN oraz komunikaty Urzędu Dozoru Technicznego.',
          },
        ],
      },
      {
        slug: 'rola-udt-pca',
        title: 'Rola UDT i PCA w systemie ATEX',
        summary:
          'Wyjaśniamy kompetencje Urzędu Dozoru Technicznego oraz Polskiego Centrum Akredytacji.',
        readTime: '5 min',
        content: [
          {
            type: 'paragraph',
            text: 'UDT sprawuje nadzór nad urządzeniami technicznymi i prowadzi kontrole w zakładach, natomiast PCA akredytuje jednostki certyfikujące i laboratoria badające aparaturę Ex.',
          },
          {
            type: 'paragraph',
            text: 'Dobra współpraca z organami nadzoru przyspiesza procesy certyfikacyjne oraz pomaga usystematyzować dokumentację zakładową.',
          },
        ],
      },
      {
        slug: 'jak-weryfikowac-certyfikaty-atex',
        title: 'Jak weryfikować certyfikaty ATEX/IECEx',
        summary:
          'Dowiedz się, jak czytać certyfikaty i sprawdzać ich ważność przed zakupem urządzeń.',
        readTime: '5 min',
        content: [
          {
            type: 'paragraph',
            text: 'Certyfikat ATEX lub IECEx powinien być analizowany pod kątem numeru jednostki, kategorii urządzenia oraz ograniczeń eksploatacyjnych. Brak weryfikacji często kończy się reklamacjami.',
          },
          {
            type: 'list',
            ordered: false,
            items: [
              'Skorzystaj z publicznych baz danych jednostek notyfikowanych.',
              'Porównaj oznaczenia EPL i temperatury z tabliczką znamionową.',
              'Upewnij się, że certyfikat obejmuje akcesoria i warianty wykonania.',
            ],
          },
        ],
      },
      {
        slug: 'proces-certyfikacji-urzadzen',
        title: 'Proces certyfikacji urządzeń krok po kroku',
        summary:
          'Opisujemy etapy przygotowania urządzenia do badań, audytu i oznakowania CE/Ex.',
        readTime: '7 min',
        content: [
          {
            type: 'paragraph',
            text: 'Droga do certyfikacji obejmuje analizę ryzyka, opracowanie dokumentacji technicznej, badania typu oraz audyt systemu jakości. Każdy etap wymaga współpracy projektantów i jednostki notyfikowanej.',
          },
          {
            type: 'list',
            ordered: true,
            items: [
              'Określenie kategorii urządzenia i zakresu badań.',
              'Przygotowanie dokumentacji konstrukcyjnej i procedur.',
              'Realizacja badań w laboratorium i opracowanie raportów.',
              'Wystawienie deklaracji zgodności i oznakowanie produktu.',
            ],
          },
        ],
      },
      {
        slug: 'lifecycle-dokumentacji-dtr-doc',
        title: 'Lifecycle dokumentacji: DTR/DoC przez 10 lat',
        summary:
          'Jak utrzymywać kompletną dokumentację techniczną i deklaracje zgodności przez cały cykl życia instalacji.',
        readTime: '4 min',
        content: [
          {
            type: 'paragraph',
            text: 'Dyrektywy ATEX wymagają przechowywania dokumentacji przez co najmniej 10 lat od ostatniego wyprodukowanego urządzenia. Dotyczy to zarówno producentów, jak i pracodawców eksploatujących sprzęt.',
          },
          {
            type: 'paragraph',
            text: 'Warto wdrożyć cyfrowe repozytorium i harmonogram przeglądów, które przypomną o aktualizacjach instrukcji i deklaracji zgodności.',
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
      {
        slug: 'jak-czytac-entity-parameters',
        title: 'Jak czytać entity parameters na tabliczce',
        summary:
          'Wskazówki dotyczące interpretacji parametrów Ui, Ii, Pi oraz temperatur dopuszczalnych.',
        readTime: '4 min',
        content: [
          {
            type: 'paragraph',
            text: 'Entity parameters określają maksymalne wartości, z jakimi urządzenie może współpracować w obwodzie iskrobezpiecznym. Prawidłowe odczytanie symboli jest warunkiem poprawnego doboru barier.',
          },
          {
            type: 'list',
            ordered: false,
            items: [
              'Ui, Ii, Pi – graniczne parametry wejściowe urządzenia polowego.',
              'Ci, Li – pojemność i indukcyjność własna urządzenia.',
              'Sięgnij do certyfikatu, aby potwierdzić warunki specjalne (X).',
            ],
          },
        ],
      },
      {
        slug: 'typowe-bledy-w-dowodzeniu',
        title: 'Typowe błędy w dowodzeniu (z przykładami)',
        summary:
          'Lista najczęstszych potknięć przy analizie obwodów Ex i oraz sposoby ich uniknięcia.',
        readTime: '6 min',
        content: [
          {
            type: 'paragraph',
            text: 'Dowodzenie iskrobezpieczeństwa wymaga spójnych danych i konsekwentnego dokumentowania. Brak aktualnych schematów lub nieuwzględnienie kabli ekranowanych to częste przyczyny niezgodności.',
          },
          {
            type: 'list',
            ordered: false,
            items: [
              'Niedoszacowanie pojemności kabla w obwodach długich.',
              'Pomijanie urządzeń pośrednich, np. terminali lub przekaźników.',
              'Brak podpisu osoby odpowiedzialnej za weryfikację obliczeń.',
            ],
          },
        ],
      },
      {
        slug: 'przykladowe-obliczenia-exi',
        title: 'Przykładowe obliczenia z XLS (casebook)',
        summary:
          'Pokazujemy, jak korzystać z arkusza kalkulacyjnego do szybkiej weryfikacji parametrów Ex i.',
        readTime: '7 min',
        content: [
          {
            type: 'paragraph',
            text: 'Przygotowany arkusz kalkulacyjny pozwala wprowadzić parametry barier, kabli i urządzeń polowych, aby automatycznie porównać je z wartościami dopuszczalnymi.',
          },
          {
            type: 'list',
            ordered: true,
            items: [
              'Zbierz dane katalogowe oraz certyfikaty urządzeń.',
              'Wprowadź parametry do dedykowanych pól arkusza.',
              'Zinterpretuj wskaźniki bezpieczeństwa i przygotuj raport.',
            ],
          },
        ],
      },
      {
        slug: 'mapa-bledow-projektowych',
        title: '„Mapa błędów projektowych”: Top 5 w schematach Ex',
        summary:
          'Zestawienie problemów, które najczęściej wykrywamy w dokumentacji projektowej.',
        readTime: '5 min',
        content: [
          {
            type: 'paragraph',
            text: 'Analiza kilkudziesięciu audytów pozwoliła stworzyć listę najczęściej spotykanych niezgodności. Mapa błędów pomaga projektantom szybko wychwycić obszary wymagające korekty.',
          },
          {
            type: 'list',
            ordered: false,
            items: [
              'Brak jednoznacznego oznaczenia stref na planach instalacji.',
              'Niezgodne prowadzenie przewodów uziemiających.',
              'Nieaktualne wydania norm w odwołaniach projektowych.',
              'Brak odniesień do wyników analiz ryzyka.',
              'Niedopasowanie kategorii aparatury do stref.',
            ],
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
          'Które rozwiązanie wybrać w zależności od aplikacji i wymagań bezpieczeństwa?',
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
      {
        slug: 'jak-dobrac-bariere',
        title: 'Jak dobrać barierę do czujnika/pozycjonera',
        summary:
          'Krok po kroku dobieramy barierę iskrobezpieczną do konkretnego urządzenia polowego.',
        readTime: '5 min',
        content: [
          {
            type: 'paragraph',
            text: 'Dobór barier wymaga analizy parametrów elektrycznych czujnika, długości okablowania oraz wymogów funkcjonalnych. Warto korzystać z kart doboru producenta i przykładowych konfiguracji.',
          },
          {
            type: 'list',
            ordered: true,
            items: [
              'Zweryfikuj entity parameters urządzenia polowego.',
              'Porównaj je z parametrami wyjściowymi bariery.',
              'Sprawdź budżet napięcia i prądu dla sygnału.',
              'Udokumentuj konfigurację w arkuszu dowodzenia.',
            ],
          },
        ],
      },
      {
        slug: 'porownanie-dostawcow-barier',
        title: 'Porównanie dostawców barier (P+F, Stahl, MTL)',
        summary:
          'Analiza mocnych stron najpopularniejszych producentów barier iskrobezpiecznych.',
        readTime: '6 min',
        content: [
          {
            type: 'paragraph',
            text: 'Rynek barier Ex i jest zdominowany przez kilku producentów. Znajomość ich portfolio ułatwia przygotowanie specyfikacji przetargowej oraz dobór zapasów magazynowych.',
          },
          {
            type: 'list',
            ordered: false,
            items: [
              'Pepperl+Fuchs – szerokie portfolio modułów i akcesoriów.',
              'R. Stahl – rozwiązania redundantne i modułowe systemy zasilania.',
              'MTL – kompaktowe bariery dla aplikacji procesowych.',
            ],
          },
        ],
      },
      {
        slug: 'lifecycle-urzadzen-ex',
        title: 'Lifecycle urządzeń Ex: od zakupu do dekomisji',
        summary:
          'Planowanie zakupów, serwisu i utylizacji aparatury z certyfikacją przeciwwybuchową.',
        readTime: '5 min',
        content: [
          {
            type: 'paragraph',
            text: 'Pełny cykl życia urządzeń Ex obejmuje etap doboru, montażu, eksploatacji, napraw oraz wycofania. Każdy etap powinien być udokumentowany zgodnie z wymaganiami ATEX.',
          },
          {
            type: 'paragraph',
            text: 'Zarządzanie cyklem życia ułatwiają rejestry urządzeń, baza części zamiennych oraz procedury przekazywania informacji do służb utrzymania ruchu.',
          },
        ],
      },
      {
        slug: 'dlaczego-urzadzenie-ex-kosztuje-wiecej',
        title: 'Dlaczego urządzenie Ex kosztuje kilka razy więcej?',
        summary:
          'Wyjaśniamy składowe ceny aparatów Ex i jak planować budżet inwestycji.',
        readTime: '4 min',
        content: [
          {
            type: 'paragraph',
            text: 'Wyższy koszt wynika z dodatkowych badań, certyfikacji, materiałów oraz rygorystycznej kontroli jakości. Warto uwzględnić także koszty logistyki i dokumentacji.',
          },
          {
            type: 'list',
            ordered: false,
            items: [
              'Specjalistyczne komponenty i materiały obudów.',
              'Testy typu oraz audyty jednostek notyfikowanych.',
              'Dłuższy czas projektowania i utrzymania dokumentacji.',
            ],
          },
        ],
      },
      {
        slug: 'ex-nr-w-praktyce',
        title: 'Ex nR w praktyce – kiedy ratuje projekt',
        summary:
          'Opisujemy zastosowania ochrony Ex nR i wymagania dla obudów o ograniczonej oddychalności.',
        readTime: '5 min',
        content: [
          {
            type: 'paragraph',
            text: 'Wykonanie Ex nR pozwala stosować aparaturę w strefach 2/22 bez konieczności budowania masywnych obudów ognioszczelnych. Kluczowe jest zapewnienie szczelności i kontroli temperatury.',
          },
          {
            type: 'list',
            ordered: false,
            items: [
              'Regularnie weryfikuj stan uszczelnień i elementów wentylacyjnych.',
              'Dobierz aparaturę zgodnie z EPL Gc/Dc.',
              'Zapewnij dokumentację testów potwierdzających ograniczoną oddychalność.',
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
        slug: 'pn-en-60079-14',
        title: 'PN-EN 60079-14 – projektowanie i instalacja',
        summary:
          'Kluczowe wymagania normy dotyczące projektowania i montażu instalacji w strefach Ex.',
        readTime: '6 min',
        content: [
          {
            type: 'paragraph',
            text: 'Norma PN-EN 60079-14 opisuje zasady projektowania instalacji elektrycznych w atmosferach wybuchowych. Zwraca uwagę na dobór aparatury, sposób prowadzenia kabli oraz testy odbiorowe.',
          },
          {
            type: 'paragraph',
            text: 'Przed przystąpieniem do montażu warto przygotować listy kontrolne, które pomogą zweryfikować zgodność z projektem i wymaganiami normy.',
          },
        ],
      },
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
      {
        slug: 'harmonogramy-przegladow-atex',
        title: 'Harmonogramy przeglądów (checklista PDF)',
        summary:
          'Propozycja harmonogramu inspekcji wraz z zakresem czynności i wymaganymi podpisami.',
        readTime: '4 min',
        content: [
          {
            type: 'paragraph',
            text: 'Regularne przeglądy powinny wynikać z oceny ryzyka i historii usterek. Udostępniamy przykładową checklistę, która pomaga uporządkować obowiązki personelu.',
          },
          {
            type: 'list',
            ordered: false,
            items: [
              'Inspekcje wizualne – codzienna kontrola oznakowań i uszczelnień.',
              'Przeglądy zbliżeniowe – weryfikacja połączeń i stanu kabli.',
              'Inspekcje szczegółowe – pełna diagnostyka wraz z pomiarami.',
            ],
          },
        ],
      },
      {
        slug: 'najczestsze-bledy-inspekcji',
        title: 'Najczęstsze błędy podczas inspekcji (zdjęcia)',
        summary:
          'Galeria problemów spotykanych podczas audytów wraz z komentarzem serwisowym.',
        readTime: '5 min',
        content: [
          {
            type: 'paragraph',
            text: 'Fotorelacja z audytów pokazuje typowe niezgodności: poluzowane dławiki, brak uszczelnień, nieprawidłowe oznaczenia. Dzięki zdjęciom łatwiej przekazać wnioski zespołom terenowym.',
          },
          {
            type: 'paragraph',
            text: 'Każde zdjęcie opisujemy zalecaną korektą oraz odniesieniem do normy, aby ułatwić wprowadzenie działań naprawczych.',
          },
        ],
      },
      {
        slug: 'szablony-protokolow-inspekcji',
        title: 'Szablony protokołów do inspekcji okresowych',
        summary:
          'Gotowe formularze pomagające dokumentować wyniki kontroli w formie papierowej i cyfrowej.',
        readTime: '3 min',
        content: [
          {
            type: 'paragraph',
            text: 'Udostępniamy szablony protokołów dla inspekcji wizualnych, zbliżeniowych i szczegółowych. Wzory obejmują miejsca na podpisy, daty oraz wnioski z kontroli.',
          },
          {
            type: 'paragraph',
            text: 'Formularze można łatwo zaadaptować do systemów CMMS i raportować postępy utrzymania ruchu.',
          },
        ],
      },
      {
        slug: 'jak-czyscic-urzadzenia-ex',
        title: 'Jak czyścić urządzenia Ex w strefach pyłowych',
        summary:
          'Rekomendacje dotyczące czyszczenia aparatury w strefach z pyłami wybuchowymi.',
        readTime: '4 min',
        content: [
          {
            type: 'paragraph',
            text: 'Nieprawidłowe czyszczenie może uszkodzić obudowy Ex lub naruszyć certyfikat urządzenia. W strefach pyłowych kluczowe jest stosowanie narzędzi antystatycznych i kontrola temperatury.',
          },
          {
            type: 'list',
            ordered: false,
            items: [
              'Stosuj odkurzacze z certyfikacją ATEX.',
              'Unikaj agresywnych środków chemicznych i wysokiego ciśnienia.',
              'Dokumentuj każdą interwencję i porównuj z instrukcjami producenta.',
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
      {
        slug: 'roznice-pyl-gaz',
        title: '10 różnic między pyłem a gazem, które psują inspekcje',
        summary:
          'Lista pułapek, które prowadzą do niezgodności podczas audytów w zakładach wielobranżowych.',
        readTime: '5 min',
        content: [
          {
            type: 'paragraph',
            text: 'Zakłady z instalacjami gazowymi i pyłowymi często stosują identyczne procedury kontrolne. Różnice fizyczne między mediami wymagają jednak osobnych standardów inspekcyjnych.',
          },
          {
            type: 'list',
            ordered: false,
            items: [
              'Inne wymagania dotyczące temperatur powierzchni.',
              'Różne procedury sprzątania i odkurzania stref.',
              'Specyficzne oznaczenia EPL i kategorii urządzeń.',
            ],
          },
        ],
      },
      {
        slug: 'najczestsze-awarie-ex',
        title: 'Najczęstsze awarie i jak ich unikać',
        summary:
          'Zestawienie awarii z audytów ATEX oraz działania prewencyjne.',
        readTime: '6 min',
        content: [
          {
            type: 'paragraph',
            text: 'Analiza zgłoszeń serwisowych pokazuje, że przyczyną większości awarii są zaniedbane połączenia uziemiające, uszkodzone dławiki i brak czyszczenia. Przedstawiamy sposoby eliminacji tych problemów.',
          },
          {
            type: 'paragraph',
            text: 'Regularne szkolenia oraz kontrola dokumentacji znacznie zmniejszają liczbę przestojów spowodowanych awariami.',
          },
        ],
      },
      {
        slug: 'przewodnik-zakupowy-atex',
        title: 'Przewodnik zakupowy dla działu zakupów',
        summary:
          'Jak przygotować zapytanie ofertowe i porównać propozycje dostawców aparatury Ex.',
        readTime: '4 min',
        content: [
          {
            type: 'paragraph',
            text: 'Dział zakupów powinien współpracować z inżynierami w celu przygotowania specyfikacji technicznej. W artykule prezentujemy wzór formularza oraz listę pytań do dostawców.',
          },
          {
            type: 'list',
            ordered: false,
            items: [
              'Wymagane certyfikaty i wersje językowe dokumentacji.',
              'Warunki serwisowe i czasy dostaw części zamiennych.',
              'Możliwość przeprowadzenia audytu u producenta.',
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
      {
        slug: 'cyfryzacja-iiot-ex',
        title: 'Cyfryzacja i IIoT w obszarach zagrożonych wybuchem',
        summary:
          'Jak wdrażać rozwiązania Industrial IoT z zachowaniem zgodności ATEX.',
        readTime: '5 min',
        content: [
          {
            type: 'paragraph',
            text: 'Rozwiązania IIoT pozwalają monitorować stan urządzeń w czasie rzeczywistym. W strefach Ex wymagają jednak certyfikowanych modułów komunikacyjnych i bezpiecznych architektur sieciowych.',
          },
          {
            type: 'paragraph',
            text: 'W artykule omawiamy dobór gatewayów Ex, sposoby segmentacji sieci oraz zabezpieczenia zasilania.',
          },
        ],
      },
      {
        slug: 'cyberbezpieczenstwo-ot-ex',
        title: 'Cyberbezpieczeństwo OT w strefach Ex',
        summary:
          'Najlepsze praktyki ochrony sieci przemysłowych w instalacjach przeciwwybuchowych.',
        readTime: '5 min',
        content: [
          {
            type: 'paragraph',
            text: 'Rosnąca cyfryzacja instalacji Ex wymaga połączenia zasad bezpieczeństwa fizycznego z cyberbezpieczeństwem. Omawiamy kontrolę dostępu, zarządzanie aktualizacjami oraz segmentację sieci.',
          },
          {
            type: 'list',
            ordered: false,
            items: [
              'Wykorzystuj strefy DMZ i firewalle przemysłowe.',
              'Monitoruj ruch sieciowy pod kątem nietypowych zdarzeń.',
              'Szkol personel w zakresie phishingu i polityk haseł.',
            ],
          },
        ],
      },
      {
        slug: 'nowe-standardy-iec',
        title: 'Nowe standardy i przyszłość norm IEC/EN',
        summary:
          'Przegląd nadchodzących zmian w rodzinie norm IEC 60079 oraz ich wpływu na zakłady.',
        readTime: '4 min',
        content: [
          {
            type: 'paragraph',
            text: 'Komitety IEC regularnie aktualizują normy dotyczące atmosfer wybuchowych. W artykule wskazujemy, które wydania są w przygotowaniu oraz jak planować aktualizację dokumentacji.',
          },
          {
            type: 'paragraph',
            text: 'Wczesne śledzenie zmian pozwala zaplanować budżet na szkolenia i modernizację aparatury zanim nowe wymagania staną się obowiązkowe.',
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
          'Jak zapewnić bezpieczeństwo przeciwwybuchowe w kopalniach podziemnych i odkrywkowych.',
        readTime: '6 min',
        content: [
          {
            type: 'paragraph',
            text: 'Górnictwo cechuje się wysokim ryzykiem zapłonu metanu i pyłu węglowego. W artykule omawiamy procedury pomiarowe, wymagania dotyczące wentylacji i dobór aparatury kategorii M1/M2.',
          },
          {
            type: 'paragraph',
            text: 'Wskazujemy także na współpracę z WUG i konieczność aktualizacji planów ratowniczych.',
          },
        ],
      },
      {
        slug: 'atex-w-petrochemii',
        title: 'ATEX w petrochemii i rafineriach',
        summary:
          'Najważniejsze punkty kontrolne dla instalacji rafineryjnych i terminali paliwowych.',
        readTime: '5 min',
        content: [
          {
            type: 'paragraph',
            text: 'W rafineriach kluczowe jest monitorowanie wycieków oraz kontrola emisji lotnych związków organicznych. Prezentujemy przykłady dobrych praktyk dotyczących detekcji gazów i zabezpieczenia zbiorników.',
          },
          {
            type: 'paragraph',
            text: 'Opisujemy także wymagania dotyczące ochrony katodowej i procedury blokady LOTO w strefach Ex.',
          },
        ],
      },
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
      {
        slug: 'atex-w-farmacji',
        title: 'ATEX w farmacji i przy produkcji leków',
        summary:
          'Specyfika procesów farmaceutycznych i wymagania wobec aparatury higienicznej.',
        readTime: '4 min',
        content: [
          {
            type: 'paragraph',
            text: 'Produkcja leków wiąże się z obecnością rozpuszczalników i pyłów substancji czynnych. Omawiamy wymagania dotyczące klas czystości, filtracji oraz dokumentacji walidacyjnej.',
          },
          {
            type: 'paragraph',
            text: 'Dodatkowo wskazujemy, jak łączyć wymogi ATEX z regulacjami GMP i FDA.',
          },
        ],
      },
      {
        slug: 'atex-w-logistyce',
        title: 'ATEX w logistyce i silosach',
        summary:
          'Bezpieczeństwo magazynowania i transportu materiałów sypkich oraz paliw.',
        readTime: '4 min',
        content: [
          {
            type: 'paragraph',
            text: 'Silosy i magazyny logistyczne gromadzą duże ilości pyłów, które mogą tworzyć atmosfery wybuchowe. Prezentujemy procedury czyszczenia i wymagania dotyczące systemów odpylania.',
          },
          {
            type: 'paragraph',
            text: 'Uwaga poświęcona jest również strefom ładowania i rozładowywania cystern.',
          },
        ],
      },
      {
        slug: 'atex-w-magazynach-energii',
        title: 'ATEX w branży baterii i magazynach energii',
        summary:
          'Zagrożenia wynikające z pracy z elektrolitem i gazami podczas ładowania akumulatorów.',
        readTime: '5 min',
        content: [
          {
            type: 'paragraph',
            text: 'Rosnące zapotrzebowanie na magazyny energii stawia nowe wyzwania w kontekście dyrektyw ATEX. Wskazujemy na zagrożenia związane z wodorem oraz wymagania wentylacji i detekcji.',
          },
          {
            type: 'paragraph',
            text: 'Przedstawiamy też przykłady procedur awaryjnych dla magazynów litowo-jonowych.',
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
          'Skrócony przewodnik po obowiązkach służb BHP w zakładach z atmosferą wybuchową.',
        readTime: '4 min',
        content: [
          {
            type: 'paragraph',
            text: 'Specjaliści BHP odpowiadają za aktualizację ocen ryzyka, nadzór nad środkami ochrony i szkolenia. Wskazujemy, jak ułożyć plan działania i współpracować z inżynierami.',
          },
          {
            type: 'paragraph',
            text: 'Do artykułu dołączamy listę kontrolną do wykorzystania podczas obchodów.',
          },
        ],
      },
      {
        slug: 'atex-dla-zakupow',
        title: 'ATEX dla działu zakupów – jak nie kupić bubla',
        summary:
          'Podpowiadamy, jak ocenić oferty i uniknąć zakupu niezgodnego z ATEX.',
        readTime: '4 min',
        content: [
          {
            type: 'paragraph',
            text: 'Działy zakupów często oceniają sprzęt głównie przez pryzmat ceny. Prezentujemy kryteria techniczne, które muszą być spełnione, aby urządzenie było dopuszczone do pracy w strefach Ex.',
          },
          {
            type: 'list',
            ordered: false,
            items: [
              'Weryfikacja certyfikatów i deklaracji zgodności.',
              'Ocena dostępności serwisu i części zamiennych.',
              'Sprawdzenie kompatybilności z istniejącymi systemami.',
            ],
          },
        ],
      },
      {
        slug: 'atex-dla-projektanta',
        title: 'ATEX dla projektanta instalacji elektrycznych',
        summary:
          'Najważniejsze aspekty projektowe, które warto uwzględnić na etapie koncepcji.',
        readTime: '5 min',
        content: [
          {
            type: 'paragraph',
            text: 'Projektant powinien znać klasyfikację stref, wymagania dotyczące kabli oraz zasady prowadzenia uziemień. Artykuł zawiera listę kontrolną i przykładowe rozwiązania konstrukcyjne.',
          },
          {
            type: 'paragraph',
            text: 'Pokazujemy także, jak dokumentować przyjęte założenia i komunikować je wykonawcy.',
          },
        ],
      },
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
      {
        slug: 'checklista-pdf-60079-17',
        title: 'Checklista PDF do inspekcji PN-EN 60079-17',
        summary:
          'Gotowy plik do wydruku z zakresem czynności dla inspekcji wizualnych i szczegółowych.',
        readTime: '3 min',
        content: [
          {
            type: 'paragraph',
            text: 'Checklistę opracowaliśmy na podstawie doświadczeń audytowych. Pozwala ona szybko potwierdzić, czy wszystkie elementy instalacji Ex spełniają wymagania normy.',
          },
          {
            type: 'paragraph',
            text: 'Plik zawiera sekcję na priorytety działań i listę osób odpowiedzialnych za wdrożenie poprawek.',
          },
        ],
      },
      {
        slug: 'protokol-inspekcyjny',
        title: 'Protokół inspekcyjny do druku (Word/PDF)',
        summary:
          'Szablon protokołu do dokumentowania przeglądów urządzeń w strefach Ex.',
        readTime: '2 min',
        content: [
          {
            type: 'paragraph',
            text: 'Protokół obejmuje dane urządzenia, wyniki pomiarów, wnioski oraz miejsce na podpis audytora i przedstawiciela zakładu. Można go zaadaptować do systemu elektronicznego obiegu dokumentów.',
          },
        ],
      },
      {
        slug: 'schematy-przykladowe',
        title: 'Schematy przykładowe w EPLAN/Visio',
        summary:
          'Zestaw plików z gotowymi schematami do wykorzystania w projektach i szkoleniach.',
        readTime: '3 min',
        content: [
          {
            type: 'paragraph',
            text: 'Udostępniamy schematy z oznaczeniem stref, przykładowym doborem barier oraz arkuszami kablowymi. Pliki mogą stanowić bazę do własnych projektów i prezentacji szkoleniowych.',
          },
        ],
      },
      {
        slug: 'specyfikacja-dla-zakupow',
        title: 'Przykładowa specyfikacja dla działu zakupów',
        summary:
          'Wzór dokumentu pomocny przy przygotowaniu zapytań ofertowych dla dostawców Ex.',
        readTime: '3 min',
        content: [
          {
            type: 'paragraph',
            text: 'Specyfikacja zawiera wymagania techniczne, kryteria oceny ofert oraz checklistę dokumentów, które powinien dostarczyć dostawca. Ułatwia to porównanie propozycji i wybór najlepszego rozwiązania.',
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
