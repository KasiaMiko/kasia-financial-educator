# Brief strony: Finansowa Bestie

Wersja: 20.11.2026 (v2). Plik przeznaczony do repozytorium (docs/brief-strony.md). Claude Code korzysta z niego jako kontekstu przy budowie strony.

## 1. Cel strony

Strona ma przedstawić Kasię jako edukatorkę finansową dla kobiet 25-40 lat, zachęcić organizatorów do zaproszenia jej na prelekcje i warsztaty oraz udostępniać uczestniczkom darmowe narzędzia do finansów osobistych.

**Dwie grupy odbiorców:**
- **Organizatorzy wydarzeń** (firmy, uczelnie, fundacje, kluby kobiece): chcą szybko ocenić, czy prelegentka jest wiarygodna i jak się z nią skontaktować.
- **Uczestniczki / kobiety 25-40 lat:** szukają prostych, zrozumiałych narzędzi i wiedzy o pieniądzach.

**Główny cel:** zapytania od organizatorów. Cel drugorzędny: zaufanie i ruch dzięki darmowym narzędziom. Strona na razie nie służy do zarabiania.

## 2. Dane stałe

- **Domena:** finansowabestie.pl (wykupiona, do podłączenia z Netlify).
- **E-mail kontaktowy:** finansowa.bestie@gmail.com (formularz kontaktowy ma wysyłać powiadomienia na ten adres).
- **Start strony:** koniec stycznia 2027. Do tego czasu strona pozostaje ukryta przed wyszukiwarkami (noindex).

## 3. Ton i marka

Ciepły, konkretny, bez żargonu i bez straszenia („bestie": przyjaciółka, która tłumaczy pieniądze). Treści edukacyjne, bez obietnic zysków i bez rekomendacji inwestycyjnych. Teksty strony po polsku, kod i nazwy plików po angielsku.

## 4. Struktura i nawigacja

Menu główne: **Strona główna | O mnie | Warsztaty i prelekcje | Narzędzia | Kontakt**
Stopka: Prywatność i cookies, zastrzeżenie edukacyjne, e-mail kontaktowy, linki do profili.

Dwa główne przyciski działania na stronie głównej: **„Zaproś mnie"** (do Kontaktu) i **„Darmowe narzędzia"**.

## 5. Podstrony

### 5.1 Strona główna (z sekcją „O mnie")
- **Cel:** przedstawić, kim jestem, i skierować odbiorczynię do właściwej ścieżki.
- **Odbiorcy:** uczestniczki i organizatorzy.
- **Treść:** nagłówek z jedną obietnicą, krótki opis dla kogo, sekcja „O mnie" (zdjęcie, 150-200 słów, misja, doświadczenie), skrót oferty prelekcji, kafelki narzędzi, przycisk zaproszenia.
- **Materiały:** zdjęcie profilowe, 3-5 faktów o sobie.
- **Zmiana (25.11.2026):** pełna historia jest na osobnej podstronie **O mnie** (`/o-mnie`, w menu). Na stronie głównej zostaje krótka sekcja „O mnie” z linkiem do podstrony.
- **Gotowa, gdy:** nowa osoba w 10 sekund wie, kim jesteś, dla kogo i jak się z Tobą skontaktować.

### 5.2 Prelekcje i warsztaty
- **Cel:** pokazać doświadczenie i ułatwić zaproszenie.
- **Odbiorcy:** organizatorzy (główni) i uczestniczki.
- **Treść:** 3-4 tematy (tytuł, czas, dla kogo, efekt), formaty (online/stacjonarnie), sekcja „Dotychczasowe wystąpienia" z jednym większym wystąpieniem (data, miejsce, temat, zdjęcia), sekcja „Nadchodzące wydarzenia" (na start może być pusta lub z krótką informacją „kolejne terminy wkrótce"), FAQ dla organizatora, przycisk Kontakt.
- **Opinie:** na starcie ich nie ma, więc miejsce na nie ma się pojawić dopiero po pierwszych mniejszych wystąpieniach. Do tego czasu nie wyświetlaj pustej sekcji.
- **Materiały:** zdjęcia z dotychczasowego wystąpienia, jego dane (data, miejsce, temat, liczba osób, jeśli możesz ją podać).
- **Zasady:** nie podawaj informacji, których nie możesz potwierdzić. Przed publikacją zdjęć sprawdź, czy organizator i widoczne osoby zgodzili się na ich publikację.
- **Gotowa, gdy:** organizator widzi tematy, format i dotychczasowe doświadczenie i może od razu napisać.

### 5.3 Darmowe narzędzia
- **Cel:** dzielić się wiedzą finansową przez proste narzędzia (intencjonalne wydawanie, budżet domowy, oszczędzanie).
- **Odbiorcy:** uczestniczki.
- **Narzędzia:** tracker poduszki bezpieczeństwa, generator planu oszczędzania, mini-słownik finansowy. Obliczenia w przeglądarce, bez zapisu danych na serwerze.
- **Treść:** strona-hub z kafelkami, przy każdym narzędziu krótki opis, informacja „materiał edukacyjny, nie doradztwo" i data ostatniej aktualizacji.
- **Gotowa, gdy:** każde narzędzie działa na telefonie i wynik zgadza się z arkuszem na 5 przypadkach testowych.

### 5.4 Kontakt
- **Cel:** umożliwić organizatorom zaproszenie Kasi na wydarzenie.
- **Odbiorcy:** głównie organizatorzy.
- **Treść:** formularz (imię, organizacja, e-mail, data i miejsce wydarzenia, liczba osób, temat, wiadomość), zgoda na przetwarzanie danych, adres finansowa.bestie@gmail.com, linki do profili, informacja o czasie odpowiedzi.
- **Gotowa, gdy:** zgłoszenie dociera na e-mail, formularz jest chroniony przed spamem i działa na telefonie.

### 5.5 Prywatność (strona w stopce)
- **Cel:** wymagane informacje prawne.
- **Treść:** polityka prywatności (dane z formularza, narzędzia zewnętrzne, zdjęcia), informacja o cookies, zastrzeżenie edukacyjne.
- **Uwaga:** szkic przygotowuje AI, ale **ostateczną treść zweryfikuj z prawnikiem**.

## 6. Elementy wspólne

- **Wersja mobilna jako priorytet.**
- **Dostępność:** kontrast, opisy obrazków, czytelne czcionki.
- **SEO:** unikalne tytuły i opisy, obraz podglądu, frazy typu „edukatorka finansowa", „warsztaty finansowe dla kobiet". Noindex do startu.
- **Bezpieczeństwo:** brak kluczy i haseł w kodzie, obliczenia w przeglądarce, walidacja formularza.
- **Zasada pracy z Claude Code:** plan przed zmianami, przegląd listy zmienionych plików przed zatwierdzeniem, żadnych wdrożeń bez mojej zgody.

## 7. Kolejność prac i start

**Faza 1 (do 11.12):** strona główna z „O mnie", Prelekcje i warsztaty, Kontakt, Prywatność, menu i stopka.
**Faza 2 (14-23.12):** darmowe narzędzia (3 narzędzia).
**Styczeń 2027:**
- małe wystąpienia (zbieranie doświadczeń i opinii),
- podłączenie domeny finansowabestie.pl w Netlify i sprawdzenie certyfikatu SSL,
- dodanie opinii i zdjęć z nowych wystąpień,
- usunięcie noindex i zgłoszenie strony do Google Search Console tuż przed startem,
- **oficjalny start: koniec stycznia.**

## 8. Otwarte pytania

1. Dane dotychczasowego wystąpienia: data, miejsce, temat, liczba uczestniczek i organizator (czy zgadza się na wymienienie?).
2. Czy organizator i osoby ze zdjęć zgodzili się na publikację zdjęć?
3. Jakie 3-4 tematy prelekcji chcesz zaoferować na starcie?
4. Czy wolisz adres e-mail na własnej domenie (np. kontakt@finansowabestie.pl) zamiast Gmaila? Wygląda poważniej dla organizatorów, ale wymaga osobnej usługi pocztowej.

## 9. Odłożone na później

- **Ranking promocji bankowych (afiliacja):** wycofany z zakresu. Jeśli wróci, wymaga wyraźnego oznaczenia współpracy, uczciwych kryteriów kolejności, regularnych aktualizacji oraz konsultacji prawnej i podatkowej.
- **Strona o nieruchomościach:** po uzyskaniu certyfikatu i konsultacji prawnej.
