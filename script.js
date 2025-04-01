// ================================
// Fonctions génératrices de questions par catégorie
// ================================

function generateEcosystemesQuestions() {
    const templates = [
      {
        q: "Qu'est-ce qu'un écosystème ?",
        correct: "Un ensemble d'êtres vivants et de leur environnement physique qui interagissent.",
        option1: "Un groupe d'organismes de la même espèce.",
        option2: "Une zone géographique isolée.",
        option3: "Un système artificiel créé par l'homme.",
        explanation: "La définition d'un écosystème inclut la biocénose et le biotope en interaction."
      },
      {
        q: "Quels sont les composants biotiques d'un écosystème ?",
        correct: "Les êtres vivants (plantes, animaux, micro-organismes).",
        option1: "Le climat et le sol.",
        option2: "L'eau et la lumière.",
        option3: "Les éléments inorganiques.",
        explanation: "Les composants biotiques désignent tous les organismes vivants présents dans un écosystème."
      },
      {
        q: "Quels sont les composants abiotiques d'un écosystème ?",
        correct: "Les éléments non vivants comme le climat, le sol et l'eau.",
        option1: "Les plantes et les animaux.",
        option2: "Les prédateurs et les proies.",
        option3: "Les producteurs primaires.",
        explanation: "Les composants abiotiques sont les facteurs physiques et chimiques qui influencent l'écosystème."
      },
      {
        q: "Quel est le rôle des producteurs dans un écosystème ?",
        correct: "Ils produisent de la matière organique par photosynthèse.",
        option1: "Ils consomment la matière organique.",
        option2: "Ils décomposent la matière morte.",
        option3: "Ils régulent la population des consommateurs.",
        explanation: "Les producteurs, principalement les végétaux, captent l'énergie solaire et la transforment en énergie chimique."
      },
      {
        q: "Que signifie la biodiversité dans un écosystème ?",
        correct: "La variété des espèces et la variabilité génétique présentes dans un milieu.",
        option1: "L'uniformité des espèces.",
        option2: "La quantité totale de biomasse.",
        option3: "La distribution uniforme des organismes.",
        explanation: "La biodiversité mesure la diversité biologique à différents niveaux (espèces, gènes, écosystèmes)."
      }
    ];
    let questions = [];
    for (let i = 0; i < 50; i++) {
      let base = templates[i % templates.length];
      questions.push({
        question: base.q + " (Variante " + (i + 1) + ")",
        options: [
          base.correct,
          base.option1,
          base.option2,
          base.option3
        ],
        correctAnswer: 0,
        explanation: base.explanation + " (Variante " + (i + 1) + ")"
      });
    }
    return questions;
  }
  
  function generateGenetiqueQuestions() {
    const templates = [
      {
        q: "Qu'est-ce qu'un gène ?",
        correct: "Une séquence d'ADN qui code pour une protéine ou un ARN fonctionnel.",
        option1: "Un fragment de protéine.",
        option2: "Un type de cellule spécialisée.",
        option3: "Une molécule lipidique.",
        explanation: "Un gène est l'unité fondamentale de l'hérédité qui contient l'information génétique."
      },
      {
        q: "Qu'est-ce qu'une mutation ponctuelle ?",
        correct: "Un changement d'une seule base dans la séquence d'ADN.",
        option1: "La duplication d'un gène entier.",
        option2: "La suppression d'un chromosome.",
        option3: "L'insertion d'une séquence longue.",
        explanation: "Une mutation ponctuelle affecte une paire de bases et peut modifier une ou plusieurs protéines."
      },
      {
        q: "Que signifie le crossing-over lors de la méiose ?",
        correct: "L'échange de segments homologues entre chromosomes.",
        option1: "La séparation des chromatides sœurs.",
        option2: "La réplication de l'ADN.",
        option3: "La fusion de deux gamètes.",
        explanation: "Le crossing-over favorise la recombinaison génétique en échangeant du matériel génétique entre chromosomes homologues."
      },
      {
        q: "Qu'est-ce que l'expression génique ?",
        correct: "Le processus de transcription et traduction de l'information contenue dans un gène.",
        option1: "La réplication de l'ADN avant la division cellulaire.",
        option2: "La mutation d'un gène.",
        option3: "La séparation des chromosomes.",
        explanation: "L'expression génique conduit à la synthèse des protéines nécessaires au fonctionnement cellulaire."
      },
      {
        q: "Quel est le rôle des introns dans un gène ?",
        correct: "Ils participent à la régulation de l'expression via l'épissage alternatif.",
        option1: "Ils codent directement pour des protéines.",
        option2: "Ils servent uniquement de séquences non fonctionnelles.",
        option3: "Ils facilitent la réplication de l'ADN.",
        explanation: "Les introns, bien que non codants, jouent un rôle clé dans la diversification des ARNm."
      }
    ];
    let questions = [];
    for (let i = 0; i < 50; i++) {
      let base = templates[i % templates.length];
      questions.push({
        question: base.q + " (Variante " + (i + 1) + ")",
        options: [
          base.correct,
          base.option1,
          base.option2,
          base.option3
        ],
        correctAnswer: 0,
        explanation: base.explanation + " (Variante " + (i + 1) + ")"
      });
    }
    return questions;
  }
  
  function generateCorpsQuestions() {
    const templates = [
      {
        q: "Quel organe pompe le sang dans le corps humain ?",
        correct: "Le cœur.",
        option1: "Les poumons.",
        option2: "Les reins.",
        option3: "Le foie.",
        explanation: "Le cœur est l'organe central de la circulation sanguine."
      },
      {
        q: "Quel est le rôle principal des poumons ?",
        correct: "Assurer l'oxygénation du sang.",
        option1: "Filtrer le sang.",
        option2: "Produire des hormones.",
        option3: "Digérer les nutriments.",
        explanation: "Les poumons permettent l'échange gazeux, apportant l'oxygène et éliminant le dioxyde de carbone."
      },
      {
        q: "Qu'est-ce qu'un neurotransmetteur ?",
        correct: "Une molécule qui facilite la transmission des signaux entre neurones.",
        option1: "Un type de cellule nerveuse.",
        option2: "Une partie du cerveau.",
        option3: "Un récepteur membranaire.",
        explanation: "Les neurotransmetteurs sont essentiels pour la communication entre les neurones."
      },
      {
        q: "Quel rôle joue le foie dans la digestion ?",
        correct: "Il produit la bile qui aide à l'émulsification des graisses.",
        option1: "Il décompose les protéines.",
        option2: "Il stocke le glucose.",
        option3: "Il absorbe les nutriments.",
        explanation: "La bile produite par le foie permet la digestion des lipides."
      },
      {
        q: "Quelle est la fonction principale des reins ?",
        correct: "Filtrer le sang et éliminer les déchets.",
        option1: "Réguler la température corporelle.",
        option2: "Produire des hormones digestives.",
        option3: "Stocker les nutriments.",
        explanation: "Les reins assurent la filtration du sang et maintiennent l'équilibre hydrique et électrolytique."
      }
    ];
    let questions = [];
    for (let i = 0; i < 50; i++) {
      let base = templates[i % templates.length];
      questions.push({
        question: base.q + " (Variante " + (i + 1) + ")",
        options: [
          base.correct,
          base.option1,
          base.option2,
          base.option3
        ],
        correctAnswer: 0,
        explanation: base.explanation + " (Variante " + (i + 1) + ")"
      });
    }
    return questions;
  }
  
  function generateMecaniqueQuestions() {
    const templates = [
      {
        q: "Quelle est la deuxième loi de Newton ?",
        correct: "F = m * a.",
        option1: "E = m * c².",
        option2: "V = IR.",
        option3: "P = W / t.",
        explanation: "La deuxième loi de Newton relie la force, la masse et l'accélération."
      },
      {
        q: "Qu'est-ce qu'une force de frottement ?",
        correct: "Une force qui s'oppose au mouvement relatif entre deux surfaces.",
        option1: "Une force qui accélère un objet.",
        option2: "Une force modifiant la trajectoire d'un objet.",
        option3: "Une force qui annule la gravité.",
        explanation: "La force de frottement est toujours dirigée en sens opposé au mouvement."
      },
      {
        q: "Comment se calcule le travail d'une force ?",
        correct: "En multipliant la force par le déplacement dans la direction de la force.",
        option1: "En divisant la force par le déplacement.",
        option2: "En multipliant la force par la masse.",
        option3: "En additionnant la force et le déplacement.",
        explanation: "La formule du travail est W = F × d × cos(θ), ici θ = 0°."
      },
      {
        q: "Qu'est-ce que la quantité de mouvement ?",
        correct: "Le produit de la masse et de la vitesse d'un objet.",
        option1: "La somme de la masse et de la vitesse.",
        option2: "La différence entre la masse et la vitesse.",
        option3: "La division de la masse par la vitesse.",
        explanation: "La quantité de mouvement (momentum) est donnée par p = m * v."
      },
      {
        q: "Que signifie la conservation de l'énergie mécanique ?",
        correct: "L'énergie totale (cinétique + potentielle) reste constante en l'absence de forces dissipatives.",
        option1: "L'énergie se transforme uniquement en chaleur.",
        option2: "L'énergie augmente continuellement.",
        option3: "L'énergie cinétique diminue toujours.",
        explanation: "En l'absence de frottements, l'énergie mécanique totale d'un système reste constante."
      }
    ];
    let questions = [];
    for (let i = 0; i < 50; i++) {
      let base = templates[i % templates.length];
      questions.push({
        question: base.q + " (Variante " + (i + 1) + ")",
        options: [
          base.correct,
          base.option1,
          base.option2,
          base.option3
        ],
        correctAnswer: 0,
        explanation: base.explanation + " (Variante " + (i + 1) + ")"
      });
    }
    return questions;
  }
  
  function generateChimieQuestions() {
    const templates = [
      {
        q: "Qu'est-ce qu'un catalyseur ?",
        correct: "Une substance qui accélère une réaction chimique sans être consommée.",
        option1: "Un réactif consommé pendant la réaction.",
        option2: "Un produit de la réaction.",
        option3: "Une substance qui ralentit la réaction.",
        explanation: "Le catalyseur abaisse l'énergie d'activation sans être modifié à la fin de la réaction."
      },
      {
        q: "Quelle est la principale différence entre une liaison ionique et une liaison covalente ?",
        correct: "La liaison ionique implique le transfert d'électrons, la covalente leur partage.",
        option1: "La liaison covalente implique le transfert d'électrons.",
        option2: "La liaison ionique ne forme pas de composé stable.",
        option3: "Les deux types de liaisons sont identiques.",
        explanation: "La nature des liaisons détermine les propriétés chimiques des composés."
      },
      {
        q: "Que représente le pH d'une solution ?",
        correct: "La concentration en ions hydrogène de la solution.",
        option1: "La température de la solution.",
        option2: "La concentration en ions sodium.",
        option3: "La densité de la solution.",
        explanation: "Le pH mesure l'acidité ou la basicité d'une solution."
      },
      {
        q: "Qu'est-ce qu'une réaction d'oxydoréduction ?",
        correct: "Une réaction impliquant le transfert d'électrons entre réactifs.",
        option1: "Une réaction où seule la température change.",
        option2: "Une réaction sans échange d'électrons.",
        option3: "Une réaction de synthèse simple.",
        explanation: "Les réactions d'oxydoréduction (redox) impliquent un changement des états d'oxydation des éléments."
      },
      {
        q: "Comment se mesure la concentration d'une solution ?",
        correct: "En utilisant la molarité, définie comme le nombre de moles de soluté par litre de solution.",
        option1: "En mesurant uniquement le volume de la solution.",
        option2: "Par la densité de la solution.",
        option3: "En utilisant le pH.",
        explanation: "La molarité est une unité standard pour exprimer la concentration en chimie."
      }
    ];
    let questions = [];
    for (let i = 0; i < 50; i++) {
      let base = templates[i % templates.length];
      questions.push({
        question: base.q + " (Variante " + (i + 1) + ")",
        options: [
          base.correct,
          base.option1,
          base.option2,
          base.option3
        ],
        correctAnswer: 0,
        explanation: base.explanation + " (Variante " + (i + 1) + ")"
      });
    }
    return questions;
  }
  
  function generateTerreQuestions() {
    const templates = [
      {
        q: "Qu'est-ce que le réchauffement climatique ?",
        correct: "L'augmentation progressive de la température moyenne de la Terre due aux activités humaines.",
        option1: "Un phénomène naturel sans lien avec l'activité humaine.",
        option2: "Une diminution de la température mondiale.",
        option3: "Un changement de saison temporaire.",
        explanation: "Le réchauffement climatique est principalement induit par l'augmentation des gaz à effet de serre."
      },
      {
        q: "Quels sont les principaux gaz à effet de serre ?",
        correct: "Le dioxyde de carbone, le méthane et l'oxyde nitreux.",
        option1: "L'azote, l'oxygène et l'hélium.",
        option2: "Le radon et l'argon uniquement.",
        option3: "Le chlore et le fluor.",
        explanation: "Ces gaz retiennent la chaleur dans l'atmosphère et contribuent au réchauffement climatique."
      },
      {
        q: "Que signifie la capacité de charge d'un écosystème ?",
        correct: "Le nombre maximal d'organismes qu'un environnement peut supporter durablement.",
        option1: "La quantité de biomasse produite chaque année.",
        option2: "Le taux de reproduction des espèces.",
        option3: "La diversité génétique d'une population.",
        explanation: "La capacité de charge est une notion écologique qui définit la limite de population supportable."
      },
      {
        q: "Quel est l'impact de la déforestation sur le climat ?",
        correct: "Elle réduit la séquestration de CO₂ et perturbe les équilibres écologiques.",
        option1: "Elle augmente la biodiversité.",
        option2: "Elle abaisse la température globale.",
        option3: "Elle n'a aucun impact sur le climat.",
        explanation: "La déforestation contribue au réchauffement climatique en diminuant la capacité d'absorption de CO₂."
      },
      {
        q: "Que signifie la biodiversité dans un écosystème terrestre ?",
        correct: "La variété des espèces présentes et leur variabilité génétique.",
        option1: "La quantité totale d'organismes.",
        option2: "La prédominance d'une seule espèce.",
        option3: "La pureté d'un écosystème.",
        explanation: "La biodiversité est un indicateur de la santé et de la résilience d'un écosystème."
      }
    ];
    let questions = [];
    for (let i = 0; i < 50; i++) {
      let base = templates[i % templates.length];
      questions.push({
        question: base.q + " (Variante " + (i + 1) + ")",
        options: [
          base.correct,
          base.option1,
          base.option2,
          base.option3
        ],
        correctAnswer: 0,
        explanation: base.explanation + " (Variante " + (i + 1) + ")"
      });
    }
    return questions;
  }
  
  function generateGenetiqueAvanceeQuestions() {
    const templates = [
      {
        q: "Qu'est-ce que l'épigénétique ?",
        correct: "L'étude des modifications de l'expression génique sans altérer la séquence d'ADN.",
        option1: "L'étude des mutations de l'ADN.",
        option2: "La réplication de l'ADN.",
        option3: "La synthèse des protéines.",
        explanation: "L'épigénétique concerne les marques chimiques qui modulent l'expression des gènes."
      },
      {
        q: "Quelle technique permet d'amplifier de l'ADN ?",
        correct: "La PCR (réaction en chaîne par polymérase).",
        option1: "L'électrophorèse.",
        option2: "La chromatographie.",
        option3: "La spectroscopie.",
        explanation: "La PCR est une méthode essentielle en biologie moléculaire pour amplifier l'ADN."
      },
      {
        q: "Que désigne le terme 'génomique' ?",
        correct: "L'étude du génome complet d'un organisme.",
        option1: "L'étude d'un seul gène.",
        option2: "La mutation ponctuelle.",
        option3: "La transcription de l'ADN.",
        explanation: "La génomique analyse l'ensemble de l'information génétique d'un organisme."
      },
      {
        q: "Comment fonctionne la technique CRISPR-Cas9 ?",
        correct: "Elle permet d'éditer l'ADN de manière ciblée par des coupures spécifiques.",
        option1: "Elle amplifie l'ADN par répétition.",
        option2: "Elle bloque la transcription des gènes.",
        option3: "Elle augmente la réplication cellulaire.",
        explanation: "CRISPR-Cas9 est une technologie de modification génétique précise."
      },
      {
        q: "Quel rôle jouent les microARN ?",
        correct: "Ils régulent l'expression des gènes en inhibant la traduction des ARNm.",
        option1: "Ils codent pour des protéines.",
        option2: "Ils facilitent la réplication de l'ADN.",
        option3: "Ils augmentent la mutation génétique.",
        explanation: "Les microARN sont des régulateurs post-transcriptionnels importants."
      }
    ];
    let questions = [];
    for (let i = 0; i < 50; i++) {
      let base = templates[i % templates.length];
      questions.push({
        question: base.q + " (Variante " + (i + 1) + ")",
        options: [
          base.correct,
          base.option1,
          base.option2,
          base.option3
        ],
        correctAnswer: 0,
        explanation: base.explanation + " (Variante " + (i + 1) + ")"
      });
    }
    return questions;
  }
  
  function generateImmunologieQuestions() {
    const templates = [
      {
        q: "Quels sont les principaux types de globules blancs ?",
        correct: "Les lymphocytes, les monocytes et les neutrophiles.",
        option1: "Les érythrocytes uniquement.",
        option2: "Les plaquettes.",
        option3: "Les cellules épithéliales.",
        explanation: "Ces cellules jouent un rôle crucial dans la défense immunitaire."
      },
      {
        q: "Quel est le rôle des lymphocytes B ?",
        correct: "La production d'anticorps.",
        option1: "La phagocytose des pathogènes.",
        option2: "La régulation de la température corporelle.",
        option3: "La production d'insuline.",
        explanation: "Les lymphocytes B se différencient en plasmocytes qui produisent des anticorps."
      },
      {
        q: "Que signifie l'immunité adaptative ?",
        correct: "Une réponse immunitaire spécifique avec mémoire.",
        option1: "Une réponse immédiate non spécifique.",
        option2: "La production spontanée d'anticorps.",
        option3: "L'absence de réponse immunitaire.",
        explanation: "L'immunité adaptative permet une réaction plus rapide lors d'une seconde exposition."
      },
      {
        q: "Qu'est-ce que l'immunisation passive ?",
        correct: "L'administration directe d'anticorps produits par un autre organisme.",
        option1: "La stimulation de la production d'anticorps par un vaccin.",
        option2: "La production d'anticorps par l'organisme lui-même.",
        option3: "L'absence de réponse immunitaire.",
        explanation: "L'immunisation passive offre une protection immédiate mais temporaire."
      },
      {
        q: "Quel est le rôle des cytokines dans le système immunitaire ?",
        correct: "Elles régulent et coordonnent la réponse immunitaire.",
        option1: "Elles transportent l'oxygène.",
        option2: "Elles détruisent directement les pathogènes.",
        option3: "Elles produisent des anticorps.",
        explanation: "Les cytokines sont des messagers qui orchestrent la communication entre cellules immunitaires."
      }
    ];
    let questions = [];
    for (let i = 0; i < 50; i++) {
      let base = templates[i % templates.length];
      questions.push({
        question: base.q + " (Variante " + (i + 1) + ")",
        options: [
          base.correct,
          base.option1,
          base.option2,
          base.option3
        ],
        correctAnswer: 0,
        explanation: base.explanation + " (Variante " + (i + 1) + ")"
      });
    }
    return questions;
  }
  
  function generateElectromagnetismeQuestions() {
    const templates = [
      {
        q: "Quelle loi décrit la force exercée sur une particule chargée en mouvement dans un champ magnétique ?",
        correct: "La force de Lorentz.",
        option1: "La loi de Coulomb.",
        option2: "La loi de Faraday.",
        option3: "La loi de Lenz.",
        explanation: "La force de Lorentz détermine l'effet du champ magnétique sur une particule chargée."
      },
      {
        q: "Qu'est-ce qu'un champ électrique ?",
        correct: "Une région où une charge subit une force électrique.",
        option1: "Une région sans charge.",
        option2: "Un champ de force magnétique.",
        option3: "Une zone de vide absolu.",
        explanation: "Un champ électrique définit l'influence qu'exerce une charge électrique dans l'espace."
      },
      {
        q: "Que décrit la loi de Faraday ?",
        correct: "L'induction électromagnétique par variation du flux magnétique.",
        option1: "La création d'un champ électrique statique.",
        option2: "La conservation de la charge électrique.",
        option3: "La force entre deux charges.",
        explanation: "La loi de Faraday est fondamentale pour comprendre l'induction dans les générateurs électriques."
      },
      {
        q: "Qu'est-ce que la loi de Lenz ?",
        correct: "La direction du courant induit s'oppose à la variation du flux magnétique.",
        option1: "Elle affirme que le courant induit renforce la variation du flux.",
        option2: "Elle décrit la relation entre tension et résistance.",
        option3: "Elle explique l'effet Joule.",
        explanation: "La loi de Lenz exprime le principe de conservation de l'énergie dans l'induction électromagnétique."
      },
      {
        q: "Comment se calcule le flux magnétique ?",
        correct: "En intégrant le champ magnétique sur une surface donnée.",
        option1: "En multipliant la force par la distance.",
        option2: "En divisant la tension par le courant.",
        option3: "En additionnant le champ magnétique et l'aire de la surface.",
        explanation: "Le flux magnétique est le produit de l'intensité du champ et de la surface perpendiculaire à ce champ."
      }
    ];
    let questions = [];
    for (let i = 0; i < 50; i++) {
      let base = templates[i % templates.length];
      questions.push({
        question: base.q + " (Variante " + (i + 1) + ")",
        options: [
          base.correct,
          base.option1,
          base.option2,
          base.option3
        ],
        correctAnswer: 0,
        explanation: base.explanation + " (Variante " + (i + 1) + ")"
      });
    }
    return questions;
  }
  
  function generateChimieTerminaleQuestions() {
    const templates = [
      {
        q: "Qu'est-ce que l'équilibre chimique ?",
        correct: "L'état où les vitesses des réactions directe et inverse sont égales.",
        option1: "Une réaction où seuls les réactifs sont présents.",
        option2: "Une réaction irréversible.",
        option3: "Un état où la concentration des produits augmente continuellement.",
        explanation: "À l'équilibre, il y a un échange constant sans changement net de concentration."
      },
      {
        q: "Comment définit-on la constante d'équilibre ?",
        correct: "Le rapport des concentrations des produits sur celles des réactifs à l'équilibre.",
        option1: "La somme des concentrations des réactifs.",
        option2: "La différence entre les concentrations des produits et des réactifs.",
        option3: "Le produit des concentrations des réactifs.",
        explanation: "La constante d'équilibre (K) caractérise la position de l'équilibre d'une réaction chimique."
      },
      {
        q: "Que signifie la cinétique chimique ?",
        correct: "L'étude des vitesses et mécanismes des réactions chimiques.",
        option1: "L'étude des équilibres thermodynamiques.",
        option2: "L'analyse de la structure des molécules.",
        option3: "La détermination des produits d'une réaction.",
        explanation: "La cinétique chimique permet de comprendre comment et à quelle vitesse une réaction se produit."
      },
      {
        q: "Qu'est-ce que l'osmose ?",
        correct: "Le mouvement de solvant à travers une membrane semi-perméable vers la solution la plus concentrée.",
        option1: "Le mouvement des solutés d'une solution diluée vers une solution concentrée.",
        option2: "La diffusion des gaz dans l'air.",
        option3: "La migration des ions sous l'effet d'un champ électrique.",
        explanation: "L'osmose est un phénomène clé dans de nombreux processus biologiques."
      },
      {
        q: "Quel est le rôle d'un catalyseur dans une réaction chimique ?",
        correct: "Il abaisse l'énergie d'activation sans être consommé.",
        option1: "Il modifie les produits finaux de la réaction.",
        option2: "Il augmente l'énergie d'activation.",
        option3: "Il agit comme un réactif supplémentaire.",
        explanation: "Un catalyseur permet d'accélérer la réaction tout en restant inchangé."
      }
    ];
    let questions = [];
    for (let i = 0; i < 50; i++) {
      let base = templates[i % templates.length];
      questions.push({
        question: base.q + " (Variante " + (i + 1) + ")",
        options: [
          base.correct,
          base.option1,
          base.option2,
          base.option3
        ],
        correctAnswer: 0,
        explanation: base.explanation + " (Variante " + (i + 1) + ")"
      });
    }
    return questions;
  }
  
  // ================================
  // Base de données globale des quiz (500 questions réparties en 10 catégories)
  // ================================
  const quizDatabase = {
    premiere: {
      svt: {
        ecosystemes: generateEcosystemesQuestions(),
        genetique: generateGenetiqueQuestions(),
        corps: generateCorpsQuestions()
      },
      "physique-chimie": {
        mecanique: generateMecaniqueQuestions(),
        chimie: generateChimieQuestions()  // Remarquez : vous pouvez créer une fonction similaire pour chimie en Première
      }
    },
    terminale: {
      svt: {
        terre: generateTerreQuestions(),
        "genetique-avancee": generateGenetiqueAvanceeQuestions(),
        immunologie: generateImmunologieQuestions()
      },
      "physique-chimie": {
        electromagnetisme: generateElectromagnetismeQuestions(),
        "chimie-terminale": generateChimieTerminaleQuestions()
      }
    }
  };
  
  // ------------------------
  // Variables de suivi du quiz et logique d'affichage (similaires à votre version initiale)
  // ------------------------
  let currentLevel = null;
  let currentSubject = null;
  let currentCategory = null;
  let currentQuiz = [];
  let currentQuestionIndex = 0;
  let score = 0;
  let userAnswers = [];
  
  function hideAllSections() {
    document.querySelector('.level-selection').style.display = "none";
    document.getElementById('categories-section').style.display = "none";
    document.getElementById('quiz-container').style.display = "none";
    document.getElementById('results-container').style.display = "none";
  }
  
  function showLevels() {
    hideAllSections();
    document.querySelector('.level-selection').style.display = "flex";
  }
  
  function showCategories(level) {
    hideAllSections();
    document.getElementById('backToLevels').style.display = "block";
    document.getElementById('categories-section').style.display = "block";
    document.querySelectorAll('.category-card').forEach(card => {
      if (card.getAttribute('data-level') === level) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  }
  
  function startQuiz(level, subject, category) {
    currentLevel = level;
    currentSubject = subject;
    currentCategory = category;
    currentQuiz = quizDatabase[level][subject][category];
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = new Array(currentQuiz.length).fill(null);
    hideAllSections();
    document.getElementById('quiz-container').style.display = "block";
    updateQuizHeader();
    displayQuestion();
  }
  
  function updateQuizHeader() {
    const quizTitle = document.getElementById('quiz-title');
    quizTitle.textContent = `${capitalize(currentSubject)} - ${formatCategory(currentCategory)} (${capitalize(currentLevel)})`;
    updateQuizProgress();
  }
  
  function updateQuizProgress() {
    const quizProgress = document.getElementById('quiz-progress');
    quizProgress.textContent = `Question ${currentQuestionIndex + 1} / ${currentQuiz.length}`;
  }
  
  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  
  function formatCategory(cat) {
    return cat.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  }
  
  function displayQuestion() {
    const questionObj = currentQuiz[currentQuestionIndex];
    document.getElementById('question-text').textContent = questionObj.question;
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = "";
    questionObj.options.forEach((option, index) => {
      const optionDiv = document.createElement("div");
      optionDiv.classList.add("option");
      optionDiv.textContent = option;
      optionDiv.addEventListener("click", () => selectOption(index, optionDiv));
      if (userAnswers[currentQuestionIndex] !== null) {
        if (userAnswers[currentQuestionIndex] === index) {
          optionDiv.classList.add("selected");
          optionDiv.classList.add(index === questionObj.correctAnswer ? "correct" : "incorrect");
        }
      }
      optionsContainer.appendChild(optionDiv);
    });
    document.getElementById('explanation-container').style.display = "none";
    document.getElementById('next-question').disabled = false;
  }
  
  function selectOption(selectedIndex, optionElement) {
    document.querySelectorAll("#options-container .option").forEach(div => div.classList.remove("selected"));
    optionElement.classList.add("selected");
    userAnswers[currentQuestionIndex] = selectedIndex;
  }
  
  function nextQuestion() {
    if (userAnswers[currentQuestionIndex] === null) {
      alert("Veuillez sélectionner une réponse.");
      return;
    }
    showExplanation();
    setTimeout(() => {
      if (currentQuestionIndex < currentQuiz.length - 1) {
        currentQuestionIndex++;
        updateQuizProgress();
        displayQuestion();
      } else {
        calculateScore();
        showResults();
      }
    }, 1500);
  }
  
  function showExplanation() {
    const explanationContainer = document.getElementById('explanation-container');
    const questionObj = currentQuiz[currentQuestionIndex];
    document.querySelectorAll("#options-container .option").forEach((div, index) => {
      if (index === questionObj.correctAnswer) {
        div.classList.add("correct");
      } else if (userAnswers[currentQuestionIndex] === index) {
        div.classList.add("incorrect");
      }
    });
    document.getElementById('explanation-text').innerHTML = questionObj.explanation;
    explanationContainer.style.display = "block";
  }
  
  function calculateScore() {
    score = 0;
    currentQuiz.forEach((question, index) => {
      if (userAnswers[index] === question.correctAnswer) {
        score++;
      }
    });
  }
  
  function showResults() {
    hideAllSections();
    document.getElementById('results-container').style.display = "block";
    document.getElementById('results-score').textContent = `${score} / ${currentQuiz.length}`;
    let message = "";
    if (score === currentQuiz.length) {
      message = "Excellent travail ! Vous maîtrisez parfaitement ce sujet.";
    } else if (score >= currentQuiz.length * 0.7) {
      message = "Bon travail ! Quelques points à revoir.";
    } else {
      message = "Il est temps de réviser davantage.";
    }
    document.getElementById('results-message').textContent = message;
  
    const resultsDetails = document.getElementById('results-details');
    resultsDetails.innerHTML = "";
    currentQuiz.forEach((question, index) => {
      const resultItem = document.createElement("div");
      resultItem.classList.add("result-item");
      resultItem.innerHTML = `
        <div class="result-question">${question.question}</div>
        <div class="result-answer">Votre réponse : ${question.options[userAnswers[index]] || "Non répondu"}</div>
        <div class="${userAnswers[index] === question.correctAnswer ? "result-correct" : "result-incorrect"}">
          Réponse correcte : ${question.options[question.correctAnswer]}
        </div>
      `;
      resultsDetails.appendChild(resultItem);
    });
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".select-level").forEach(btn => {
      btn.addEventListener("click", (e) => {
        const level = e.target.getAttribute("data-level");
        showCategories(level);
      });
    });
  
    document.getElementById("backToLevels").addEventListener("click", showLevels);
  
    document.querySelectorAll(".category-card").forEach(card => {
      card.addEventListener("click", () => {
        const category = card.getAttribute("data-category");
        const subject = card.getAttribute("data-subject");
        const level = card.getAttribute("data-level");
        startQuiz(level, subject, category);
      });
    });
  
    document.getElementById("next-question").addEventListener("click", nextQuestion);
  
    document.getElementById("retry-quiz").addEventListener("click", () => {
      startQuiz(currentLevel, currentSubject, currentCategory);
    });
  
    document.getElementById("back-to-categories").addEventListener("click", () => {
      showCategories(currentLevel);
    });
  });
  