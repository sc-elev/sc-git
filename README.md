## SC-GIT README

Hej!

Här kommer några övningar för att bli vän med git. Hoppas de kommer
till nytta!

### Installera. starta och konfigurera.

MÅL: Få en fungerande gitinstallation.

Ladda ner windows-version för git från *http://git-scm.com/download*. Kör
installaionsprogrammet, använd de förvalda värdena förutom:

- Configuring line end conversions: Välj "Checkout as is, commit as is"

Sedan installationen är klar skall vi starta git-bash, som bl a kan köra
de git-kommandon vi vill göra. Det finns flera sätt att starta, men
det enklaste är

- Starta Utforskaren och leta rätt på det bibliotek som du vill använda.
- Högerklicka på biblioteket och välj "Git Bash Here".

du skall nu ha en kommandotolk öppen. De som är vana vid Linux kommer
att upptäcka att det mesta är sig likt inklusive linux-kommandon som
find, grep, vi etc. Men vi klarar oss utan sådant för dessa övningar.

Git märker alla ändringar med användarid och epostadress. För att
konfigurera gör

    $ git config --global user.name "John Doe"
    $ git config --global user.email johndoe@example.com
    $ git config --global core.editor notepad

fast med ert eget namn och epostadress. Många är försiktiga med att
använda sin "riktiga" adress i detta sammanhang, det går bra att att
ange något annat.


### Kopiera övningsprojektet.

MÅL: Kunna kopiera och använda ett befintligt Visual Studioprojekt
m h a git.

I git använder vi *git clone* för att skapa en komplett kopia av ett
befintligt projekt. För att kopiera övningsprojektet:

 - Starta Utforskaren och gå till det bibliotek där ni har era
   Visual Studio-projekt
 - Starta Git Bash (se ovan).
 - I Git-Bash ge kommandon:

        $ git clone https://github.com/sc-elev/sc-git.git
        $ cd sc-git
 - I Visual Studio, välj *Open Project* och använd filen *sc-git.sln*
   som skapats. Ni skall nu ha den ärofyllda fizzbuzz-övningen igång
   (provkör gärna!). Kolla igenom de filer som ingår i övningen.


### Läsa historien och checka ut olika versioner.

MÅL: Kunna använda olika versioner av filerna i git-trädet.

Om du ändrat  en fil men inte sparat ändringen kan man återställa
filen till sista kända läge:

   - Lägg till lite skräp i sc-git/JavaScript1.js. Använd
     Visual Studio, glöm inte att spara filen.
   - Återställ genom att


        $ git checkout sc-git/JavaScript1.js

och kontrollera resultatet.

Lista sedan git-loggen genom att ge kommandot

    $ git log --oneline

som visar historien, i vårt enkla fall bara fem ändringar (commit),
varje ändring med sitt id (7 hexsiffror) samt den kommentar som lades
till när ändringen gjordes.

Kontrollera vad som gjordes i näst sista ändringen:

    $ git show HEAD^

Om ni vill använda den föregående versionen av README.md gör:

    $ git checkout HEAD^ README.md

Om ni vill använda en föregående version av hela projekt gör t ex

    $ get checkout HEAD^^

eller använd ett commit-id som listas i *git log* (Copy-Paste!)

    $ git checkout 30658b6

Kontrollera vad som finns i filerna. För att återställa:

    $ git checkout master



### Göra ändringar

MÅL: Att kunna skapa "commits", förstå "staging area" och generell
status för ändrade filer.

Kontrollera status genom att använda

    $ git status

Det signifikanta här är vad som inte skrivs, se senare.

Använd nu Visual Studio för att ändra i JavaScript1.js, lägg t ex
till en kommentarrad.

Spara filen. Kör därefter *git status* igen.

Resultat: Git listar javascript1.js som "modified" under rubriken
"Not Staged for Commit" . Kontrollera ändringen genom att göra:

    $ git diff

Om du är nöjd med din ändring så flytta in den i "staging area" och
kontrollera status:

    $ git add sc-git/JavaScript1.js
    $ git status

Notera att git nu listar vår fil under rubriken "Changes to be
committed." Kommandot "git diff" visar nu ingenting, använd istället

    $ git diff --staged

för att kontrollera hur våra ändringar i "staging area" ser ut.

Om allt ser bra ut så  skapar vi vår nya ändring och kontrollerar
historien:

    $ git commit -m "JavaScript.js"
    $ git log --oneline

Notera hur din ändring lagts till som sista post (dvs först i listan).

Ibland när man skapat en ändring (commit) så kommer man på att det blev
fel (åtminstone händer det mig). Istället för att skapa en ny ändring
kan man då uppdatera den sista ändringen. Gör så här:

    - Lägg till ytterligare en kommentarrad i JavaScript1.js
    - Flytta in filen till staging area:

       $ git add sc-git/javaScript1.js

    - Lägg till den till sista ändringen:

      $ git commit --amend

Du hamnar i notepad som låter dig ändra meddelandet som hör till
ändringen. Spara den (möjligen modifierade) texten och git ordnar resten.
Kolla resultatet:

      $ git log --oneline

Notera att hashvärdet för din ändring har ändrats (det gamla finns om du
rullar tillbaka i bash-fönstret). Git garanterar att hashvärdet alltid
motsvarar den faktiska ändringen.


### Hantera grenar (branches).

MÅL: Att kunna skapa nya grenar och att förena (merge) två grenar
till en.

Skapa en ny gren *tmp* där vi skall arbeta ett tag:

    $ git checkout -b tmp

Notera att bash-prompten ändras: {master} byts mot {tmp}. När man
arbetar med flera grenar (i praktiken nästan alltid) så använder
man kommandot


    $ git branch

för att lista alla grenar, med en  \* framför den aktuella grenen vi är i.

Skapa en ny ändring genom att lägga till ytterligare en kommentar i
JavaScript1.js och "committa" den (se ovan). Kontrollera att din nya
ändring  listas av

    $ git log --oneline

Med två grenar så har vi i praktiken två uppsättningar av vårt projekt. Gå
tillbaka till den ursprungliga versionen genom

    $ git checkout master

Kolla att JavaScript1.js verkligen är den urprungliga, och gå därefter
tillbaka till tmp-grenen:

    $ git checkout tmp

Skapa nu en ny fil i Visual Studio, t ex JavaScript2.js. Fyll den med några
kommentarer och spara den.  Gör nu

    $ git status

Notera att den nya filen listas under rubriken "Untracked files". Eftersom
vi vill att git skall hantera även denna fil så flyttar vi in den i
"staging area" , kontrollerar att allt ser bra ut och sparar den
nya ändringen:

    $ git add JavaScript2.js
    $ git diff --staged
    $ git commit -m "Adding new file Javascript2.js"

*git log* visar nu att vi har två nya ändringar på tmp-grenen. I praktiken
används den här typen av grenar för att göra olika typer av experiment
utan att röra huvudgrenen *master*.  När man är nöjd med sitt experiment
så kan man föra ihop de nya ändringarna genom att använda

    $ git checkout master
    $ git merge tmp

vilket kopierar alla ändringar i tmp till master (förenklad förklaring!).
Kontrollera att master ser OK ut och ta därefter bort grenen tmp som inte
längre tjänar något syfte:

    $ git log --oneline
    $ git branch -d tmp


Du har ny skapat en gren, lagt till ändringar i den och fört över ändringarna
till huvudgrenen.


### Konflikthantering

MÅL: Att inte få panik när det uppstår konflikter.

Konflikter uppstår när man skall förena två olika grenar där de olika
grenarna ändrat på samma ställe fast på olika sätt. Git kan då inte
bestämma vilken ändring som gäller, utan man måste hjälpa till som
användare genom att lösa upp konflikten. Låt oss öva litet:


Först skapar vi en temporär gren devel, kastar vi bort alla ändringar som
gjorts under övningen och kontrollerar resultatet:

    $ git checkout -b devel
    $ git reset --hard 1264329
    $ git log --oneline

Därefter skapar vi en ny gren feature, som är identisk med devel:

    $ git checkout -b feature

Idén är allstå att vi simulerar två grenar, en som är den ordinarie
utvecklingen och en som är ett experimentell "feature".

Fortfarande i featuregrenen, redigera test1.html och byt ut
h1-rubriken till "Övningar i GIT". Flytta till staging area, kontrollera
resultatet och spara ändringen:

    $ git add sc-git/test1.html
    $ git diff --staged
    $ git commit -m "Fix heading".

Gå tillbaka till devel-grenen (*git checkout devel*) och ändra samma
rubrik, men denna gång till "GIT-övningar". Flytta till staging area,
kontrollera resultatet och spara ändringen på samma sätt.

Nu har vi två grenar där vi ändrat på samma ställe men på olika sätt.
Det här är något vi normalt försöker undvika, men det händer ändå.

Försök att förena grenarna:

    $ git checkout devel
    $ git merge feature

git klagar och skriver bl a CONFLICT. Om du gör *git status* så ser du
att filen test1.html listas som "both modified". Du måste nu hjälpa
till. Ta upp filen i  editorn och leta read på konflikten. Den är tydligt
märkt med <<<, ===, och >>>. Området mellan <<< och ===  kommer från
HEAD (dvs devel) och det mellan === och >>>  kommer från feature-grenen.

Redigera filen: ta bort alla märkningar och välj den rubrik du tycker
verkar bäst. Flytta till staging area, kolla och spara ändringen:

    $ git add sc-git/test1.html
    $ git diff --staged
    $ git commit -m "Merging featire branch"

Du har skapat och löst upp en git-konflikt! Den här konflikten var ju
konstgjord, men liknande saker händer till och från, framförallt när
man är flera i projektet.

### Jobba tillsammans via remotes - allmänt (LÄS!)

MÅl: Att förstå *remotes* och känna på ett verklighetsförankrat
arbetsflöde med mer än en person.

När man arbetar flera tillsammans i ett git-projekt så är det centrala
begreppet "remote". En remote är egentligen bara ett kortnamn för en
git-url. Men i praktiken är det ett ställe, typiskt på en server någonstans,
där vi hämtar och lämnar ändringar.

OBS! I denna övning skall ni pusha (dvs skriva) data på github. För att det
inte skall bli kaos skall ni:
  - Jobba två och två (utan att för den skull sitta tillsammans).
  - Använda den gren (branch) ni fått er tilldelad.

I varje par finns det två olika roller:
  - 'downstream' är den part som skapar nya ändringar och vill ha dem
    införda.
  - 'upstream' är den part som äger grenen och för in de nya ändringarna.

Den allmänna idén är att
  - upstream skapar projektet
  - downstream kopierar projektet, skapar en bugfix coh skickar den till
    upstream
  - upstream lägger in bugfixen
  - downstream kopierar det uppdaterade projektet till sig.

Ni bör veta vem som är vem. Det blir enklast så ;)

###  Skapa och uppdatera en remote

Börja med att lista vilka remotes som finns:

    $ git remote show

Analogt med att det från början finns en enda gren *master* så finns det
från början en remote som heter *origin*. Den avspeglar den adress som
ni en gång klonade detta projekt från. Visa mer data för origin:

    $ git remote show origin

Här finns viktig information om den url som hanteras samt om det finns
ändringar som bara finns hos oss lokalt men inte på remoten (ursäkta
franskan...), eller tvärtom.

Informationen lagras lokalt och kan vara föräldrad. Uppdatera den lokala
informationen:

    $ git remote update origin

Det här en en helt riskfri operation som inte påverkar några filer, bara
statusinformationen för *origin*. Görs alltid om man tror att något
hänt (nya ändringar) på en remote.

Skapa en ny remote *upstream*. Normalt skall detta vara en annan url, men
för oss blir det

    $ git remote add upstream https://github.com/sc-elev/sc-git.git


### upstream: skapa arbetsgrenen.

Som upstream är det du som skapar det nya projektet. Du gör det genom
att skapa en ny gren (*git checkout -b ER-EGEN-BRANCH*) samt att lägga
till 2-3 godtyckliga ändringar. När du gjort detta publicerar du din gren
genom att "pusha" den, dvs kopiera den till *upstream*

    $ git push -u upstream ER-EGEN-BRANCH

Det här sätter upp den lokala grenen ER-EGEN-BRANCH så den är koppplad till
ER-EGEN-BRANCH på *upstream*.

När du är klar så kontaktar du *downstream* och säger att projektet finns.

### downstream: Kopiera arbetsgrenen

Som downstream vet du nu att det finns ett projekt att kopiera. Kolla
status genom

     $ git remote show upstream

Om allt är somm förväntat skall kommandot bl a att lista en ny gren
ER-EGEN-BRANCH som finns tillgänglig på remoten.  Hämta hem
sista versionen, lista alla grenar,  gå till (checka ut) den nya grenen
och lista status:

    $ git fetch upstream ER-EGEN-BRANCH
    $ git branch
    $ git checkout ER-EGEN-BRANCH
    $ git log --oneline

Du ser nu ert projekt så som det skapats av upstream.  Låt oss skapa
en ny gren som där vi skall göra en bugfix:

    $ git checkout -b ER-EGEN-BRANCH.bugfix

Gör 2-3 egna ändringar i projektet som motsvarar en bugfix du vill lägga
in. Pusha därefter er bugfix till servern:

    $ git push -u upstream ER-EGEN-BRANCH.bugfix

Ni har nu publicerat er ändring, och upstream kan lägga in den i projektet.
Kontakta upstream och berätta att bugfixen finns tillgänglig.


### upstream: lägg in bugfixen

Börja med att kontrollera *upstream*-remoten:

    $ git remote show upstream

Ni skall nu se den nya ER-EGEN-BRANCH.bugfix grenen listad. Hämta hem den:

    $ git fetch upstream ER-EGEN-BRANCH.bugfix

I detta läge skall ni granska ändringen, och eventuellt be downstream
skriva om den. Just nu lägger vi bara in den, och publicerar den
uppdaterade grenen:

    $ git checkout ER-EGEN-BRANCH
    $ git git merge ER-EGEN_BRANCH.bugfix
    $ git push

När ni lagt in ändringen meddelar ni downstream.

### downstream: Uppdatera huvudgrenen.

När du fått meddelande från upstream om att ändringen är inlagd så skall
du uppdatera din egen kopia av ER-EGEN-BRANCH:

    $ git checkout ER-EGEN-BRANCH
    $ git pull

Allt är nu klart för att skapa en ny bugfix-gren...




