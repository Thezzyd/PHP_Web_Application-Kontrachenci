# Moduł Zarządzanie Kontrahentami
## Funkcjonalności
* Przechowywanie danych na temat kontrahenta.
* Dodawanie nowych kontrahentów.
* Edycja istniejących w bazie informacji o kontrahencie, jak i uzupełnianie brakujących informacji.
* Usuwanie niechcianych lub nieaktualnych kontrahentów, oraz poszczególnych informacji (np. nieaktualny nr telefonu u jednej z osób kontaktowych).
* Możliwość wyszukiwania informacji np. Kontrahentów po nazwie.
* Możliwość sortowania i filtrowania informacji.
* Wyświetlanie i zliczanie liczby faktur na podstawie "zamockowanych" danych o fakturach powiązanych z kontrahentami (przygotowanie programu na sięganie do modułu fakturowania, który nie jest zaimplementowany)

## Narzędzia i technologie:
* Rozwiązania bazodanowe: **XAMPP, phpMyAdmin, mySQL**
* API: **REST API, PHP, Slim**
* Warstwa prezentacji aplikacji: **HTML, CSS, JavaScript**
* Graficzna prezentacja algorytmu oraz diagramu ERD: **Draw.io**
* Środowisko programistyczne: **Visual Studio Code**

## Diagram ERD
|![erd_diagram](/diagrams/erd.png) | 
|:--:| 
| *Rysunek 1. Diagram ERD.* |

## Algorytm sprawdzenia liczby wystawionych faktur oraz sald zapłaconych i niezapłaconych faktur za wskazany okres:

|![erd_diagram](/diagrams/invoice_algorithm.png) | 
|:--:| 
| *Rysunek 2. Schemat blokowy przedstawiający algorytm realizujący zliczanie wystawionych faktur.* |

## GUI
Po uruchomieniu aplikacji „Moduł Zarządzania Kontrahentami” ukazuje się strona główna, na której aplikacja samoczynnie pobiera dane o figurujących w bazie danych kontrahentach za pośrednictwem API. 

Z poziomu strony głównej mamy możliwość:
* przeglądania informacji o istniejących kontrahentach,

|![screen_1](/GUI/1.png) | 
|:--:| 
| *Rysunek 3. Strona główna aplikacji.* |

* dodawania nowych kontrahentów,

|![screen_2](/GUI/2.png) | 
|:--:| 
| *Rysunek 4. Strona główna aplikacji -> Dodaj nowego kontrahcenta.* |

* edycji figurujących w bazie danych kontrahentów,

|![screen_3](/GUI/3.png) | 
|:--:| 
| *Rysunek 6. Strona główna aplikacji -> Edytuj istniejącego kontrahcenta.* |

* usuwania figurujących w bazie danych kontrahentów,

|![screen_4](/GUI/4.png) | 
|:--:| 
| *Rysunek 7. Strona główna aplikacji -> Usuń istniejącego kontrahcenta.* |

* możliwość pobrania i wyświetlenia danych z modułu zarządzania fakturami o przypisanych fakturach do danego klienta (zliczenie wystawionych faktur, informacja ile faktur zostało opłaconych ile nieopłaconych, informacja ile faktur jest po terminie płatności, informacja o nieuregulowanych należnościach, informacja o uregulowanych należnościach),

|![screen_5](/GUI/5.png) | 
|:--:| 
| *Rysunek 8. Strona główna aplikacji -> Powiązane faktury.* |

* możliwość posortowania wyświetlania danych na stronie (np. malejąco według nazwy kontrahenta),

|![screen_6](/GUI/6.png) | 
|:--:| 
| *Rysunek 9. Strona główna aplikacji -> Opcja sortowania.* |

* możliwość przefiltrowania wyświetlanych kontrahentów po podanej frazie,

|![screen_7](/GUI/7.png) | 
|:--:| 
| *Rysunek 10. Strona główna aplikacji -> Opcja filtrowania.* |

* możliwość wyświetlenia danych o adresach, osobach kontaktowych i stanowiskach po kliknięciu w przycisk przy danym kontrahencie „Pokaż dane” (ikona otwartej księgi),

|![screen_8](/GUI/8.png) | 
|:--:| 
| *Rysunek 11. Strona główna aplikacji -> Pokaż dane.* |

* możliwość przejścia do sekcji „Wyszukiwarki”.

|![screen_9](/GUI/9.png) | 
|:--:| 
| *Rysunek 12. Strona główna aplikacji -> Wyszukiwarka.* |

Po kliknięciu w przycisk „Pokaż dane” otwarta zostanie sekcja, która pozwoli operować na adresach przypisanych do wybranego kontrahenta, oraz operować na osobach kontaktowych jak i stanowiskach. Dostępne możliwości z poziomu tej sekcji:
* przeglądanie informacji o istniejących adresach przypisanych do wskazanego kontrahenta,

|![screen_10](/GUI/10.png) | 
|:--:| 
| *Rysunek 13. Strona z danymi adresowymi kontrahentów.* |

* możliwość przypisania nowego adresu siedziby głównej lub oddziału do wybranego kontrahenta,

|![screen_11](/GUI/11.png) | 
|:--:| 
| *Rysunek 14. Strona z danymi adresowymi kontrahentów -> Dodaj nowy adres.* |

* możliwość edycji wskazanego adresu,

|![screen_12](/GUI/12.png) | 
|:--:| 
| *Rysunek 15. Strona z danymi adresowymi kontrahentów -> Edycja istniejącego adresu.* |

* możliwość usunięcia wskazanego adresu,

|![screen_13](/GUI/13.png) | 
|:--:| 
| *Rysunek 16. Strona z danymi adresowymi kontrahentów -> Usunięcie istniejącego adresu.* |

* możliwość filtrowania wyników po frazie,

|![screen_14](/GUI/14.png) | 
|:--:| 
| *Rysunek 17. Strona z danymi adresowymi kontrahentów -> Opcja filtrowania.* |

* możliwość podglądu informacji o przypisanych osobach kontaktowych do danego adresu,

|![screen_15](/GUI/15.png) | 
|:--:| 
| *Rysunek 18. Strona z danymi adresowymi kontrahentów -> Pokaż osoby kontaktowe.* |

* możliwość dodania nowej osoby kontaktowej i powiązania jej z adresem,

|![screen_16](/GUI/16.png) | 
|:--:| 
| *Rysunek 19. Strona z danymi adresowymi kontrahentów -> Dodaj nowa osobę kontaktową.* |

* możliwość powiązania istniejącej osoby kontaktowej z danym adresem,

|![screen_17](/GUI/17.png) | 
|:--:| 
| *Rysunek 20. Strona z danymi adresowymi kontrahentów -> Dodaj istniejącą osobę kontaktową.* |

* możliwość edycji oraz usunięcia osoby kontaktowej całkowicie lub tylko jej powiązanie z danym adresem,

|![screen_18](/GUI/18.png) | 
|:--:| 
| *Rysunek 21. Strona z danymi adresowymi kontrahentów -> Edytuj istniejącą osobę kontaktową.* |

* możliwość dodawania nowych stanowisk oraz edycji i usuwania istniejących stanowisk,

|![screen_19](/GUI/19.png) | 
|:--:| 
| *Rysunek 22. Strona z danymi adresowymi kontrahentów -> Edytuj listę stanowisk.* |

* możliwość powrotu do sekcji kontrahentów,

|![screen_20](/GUI/20.png) | 
|:--:| 
| *Rysunek 23. Strona z danymi adresowymi kontrahentów -> Wróć.* |

* możliwość przejścia do sekcji „Wyszukiwarka”,

|![screen_21](/GUI/21.png) | 
|:--:| 
| *Rysunek 24. Strona z danymi adresowymi kontrahentów -> Wyszukiwarka.* |

Po przejściu do sekcji „Wyszukiwarka”, pojawi się możliwość przeszukania bazy danych po podanej frazie, można wskazać pojedynczą tabelę lub przeszukać wszystkie jakie występują w bazie.
* przeszukiwanie pojedynczej tabeli,

|![screen_22](/GUI/22.png) | 
|:--:| 
| *Rysunek 25. Wyszukiwarka -> Pojedyncza tabela.* |

* przeszukiwanie wszystkich tabel,

|![screen_23](/GUI/23.png) | 
|:--:| 
| *Rysunek 26. Wyszukiwarka -> Wszystkie tabele.* |


* możliwość usuwania i edycji każdej wyszukanej pozycji.

|![screen_24](/GUI/24.png) | 
|:--:| 
| *Rysunek 27. Wyszukiwarka -> Modyfikuj.* |
