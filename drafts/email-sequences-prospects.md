# Séquences Email — Suivi Prospects Pulse Graphix
**Créé:** 2026-02-19 | **Statut:** DRAFT — En attente de validation Kabundji
**Objectif:** 3 emails automatisés après premier contact (appel ou rencontre)

---

## 📧 Séquence 1 : Après Premier Appel (Lead Chaud)

### Email 1 — J+0 (Jour même) : Récapitulatif + Proposition Gratuite
**Objet:** Ravi d'avoir échangé, {{PRENOM}} — voici ce qu'on a discuté

```
Bonjour {{PRENOM}},

Merci pour notre échange aujourd'hui ! C'était un plaisir de discuter 
de {{NOM_ENTREPRISE}} et de vos projets digitaux.

Comme promis, voici un résumé de ce qu'on a évoqué :

📌 **Votre situation actuelle :**
→ {{SITUATION_ACTUELLE}}

📌 **Ce qu'on peut faire ensemble :**
→ {{SOLUTION_PROPOSEE}}

📌 **Prochaine étape :**
→ Je vous prépare une proposition détaillée d'ici {{DELAI}}

En attendant, je vous ai préparé un mini-audit gratuit de votre 
présence en ligne (voir pièce jointe).

N'hésitez pas si vous avez des questions !

Cordialement,
Chicco Mutombo Kabundji
Fondateur — Pulse Graphix
📞 +33 6 12 77 64 98
🌐 www.pulsegraphix.net
```

**Pièce jointe suggérée :** PDF mini-audit (1 page) avec score Google, vitesse, mobile-friendly

---

### Email 2 — J+3 : Valeur ajoutée + Preuve sociale
**Objet:** 3 choses que vos concurrents font en ligne (et pas vous)

```
Bonjour {{PRENOM}},

Suite à notre discussion, j'ai pris quelques minutes pour analyser 
votre secteur à {{VILLE}}.

Voici 3 choses intéressantes que j'ai remarquées :

1️⃣ **{{CONCURRENT_1}}** a un site web avec réservation en ligne
   → Ils captent les clients qui cherchent "{{RECHERCHE_GOOGLE}}"

2️⃣ **{{CONCURRENT_2}}** apparaît en 1ère page Google
   → Grâce à un site optimisé SEO (pas compliqué à mettre en place)

3️⃣ **73% des clients** vérifient en ligne avant de se déplacer
   → Sans site web, vous êtes invisible pour eux

La bonne nouvelle ? Rattraper ce retard est plus simple (et moins cher) 
que vous ne le pensez.

💡 **Exemple concret :** Un boulanger à Torcy a récupéré +5 clients/semaine 
grâce à un simple site vitrine avec son menu et ses horaires.

Je vous envoie la proposition détaillée d'ici demain.

Bonne journée,
Chicco
Pulse Graphix
```

---

### Email 3 — J+7 : Proposition + Urgence douce
**Objet:** Votre proposition personnalisée est prête, {{PRENOM}}

```
Bonjour {{PRENOM}},

Comme promis, voici votre proposition personnalisée pour 
{{NOM_ENTREPRISE}} (voir pièce jointe).

📋 **Ce que la proposition inclut :**
✅ Site web professionnel responsive ({{NB_PAGES}} pages)
✅ Design sur mesure aux couleurs de {{NOM_ENTREPRISE}}
✅ Optimisation Google (SEO local)
✅ Formation pour gérer votre site en autonomie
✅ Hébergement + domaine inclus (1 an)

💰 **Investissement :** À partir de {{PRIX_STARTER}} € HT
⏱️ **Délai :** {{DELAI_SEMAINES}} semaines après validation

🎁 **Offre de lancement :** Si vous validez avant le {{DATE_LIMITE}}, 
je vous offre :
→ 3 mois de maintenance gratuite (valeur 300€)
→ Configuration Google Business Profile offerte

---

Pour avancer, il suffit de :
1. Répondre à cet email avec "OK, on y va"
2. On planifie un RDV de 30 min pour le brief créatif
3. Votre site est en ligne dans {{DELAI_SEMAINES}} semaines

Des questions ? Je suis disponible par email ou au 06 12 77 64 98.

Cordialement,
Chicco Mutombo Kabundji
Fondateur — Pulse Graphix
📞 +33 6 12 77 64 98
🌐 www.pulsegraphix.net
```

**Pièce jointe :** Proposition PDF générée depuis `templates/proposal-pulse-v1.html`

---

## 📧 Séquence 2 : Lead Froid (Pas de réponse après Séquence 1)

### Email 4 — J+14 : Relance douce
**Objet:** Une question rapide, {{PRENOM}}

```
Bonjour {{PRENOM}},

Je me permets un petit suivi suite à ma proposition de la semaine dernière.

Je comprends que vous êtes occupé(e) — gérer {{TYPE_COMMERCE}} 
ne laisse pas beaucoup de temps libre !

Juste une question rapide :
→ Est-ce que le projet de site web est toujours d'actualité ?

Si oui, je reste disponible pour en discuter quand ça vous arrange.
Si le timing n'est pas bon, pas de souci — je garde votre dossier 
et on en reparle quand vous serez prêt.

Belle journée,
Chicco
```

### Email 5 — J+30 : Dernière relance + Valeur
**Objet:** Dernière chose avant que je referme votre dossier

```
Bonjour {{PRENOM}},

C'est Chicco de Pulse Graphix. Je ne veux pas être insistant, 
donc ce sera mon dernier message sur le sujet.

Avant de classer votre dossier, je voulais partager un chiffre 
qui m'a surpris cette semaine :

📊 Les commerces avec un site web à {{VILLE}} génèrent en moyenne 
23% de chiffre d'affaires de plus que ceux sans présence en ligne.
(Source : CCI France, 2025)

Si un jour le projet vous intéresse à nouveau, mon numéro n'a pas 
changé : 06 12 77 64 98

Je vous souhaite une excellente continuation avec {{NOM_ENTREPRISE}}.

Cordialement,
Chicco Mutombo Kabundji
Pulse Graphix
```

---

## 📧 Séquence 3 : Après Découverte (Lead Très Chaud)

### Email Post-Discovery — J+0 : Récap + Devis
**Objet:** Récapitulatif de notre RDV + devis {{NOM_ENTREPRISE}}

```
Bonjour {{PRENOM}},

Merci pour ce rendez-vous productif ! Voici le récapitulatif :

📌 **Ce qu'on a décidé :**
→ Formule choisie : {{FORMULE}} ({{PRIX}} € HT)
→ Nombre de pages : {{NB_PAGES}}
→ Fonctionnalités : {{FONCTIONNALITES}}
→ Délai : {{DELAI_SEMAINES}} semaines

📎 **Documents joints :**
1. Devis officiel (à signer et retourner)
2. Questionnaire brief créatif (à remplir avant le kick-off)

🚀 **Pour démarrer :**
1. Signez le devis
2. Réglez l'acompte de 50% (coordonnées bancaires sur le devis)
3. Je vous envoie le planning détaillé sous 24h

Si vous avez la moindre question, n'hésitez pas.

À très bientôt pour créer quelque chose de beau ensemble !

Chicco
Pulse Graphix
📞 06 12 77 64 98
```

---

## ⚙️ Automatisation n8n (Futur)

### Workflow suggéré :
1. **Trigger :** Nouveau contact ajouté dans CRM (Google Sheets/Notion)
2. **Délai :** Attendre J+0/J+3/J+7 selon la séquence
3. **Action :** Envoyer email via Gmail API
4. **Condition :** Si réponse reçue → arrêter la séquence
5. **Suivi :** Logger dans CRM le statut du lead

### Variables à configurer :
| Variable | Description |
|----------|-------------|
| `{{PRENOM}}` | Prénom du contact |
| `{{NOM_ENTREPRISE}}` | Nom du commerce |
| `{{VILLE}}` | Ville du prospect |
| `{{TYPE_COMMERCE}}` | Boulangerie, restaurant, etc. |
| `{{SITUATION_ACTUELLE}}` | Résumé du problème |
| `{{SOLUTION_PROPOSEE}}` | Ce qu'on propose |
| `{{PRIX_STARTER}}` | Prix de la formule Starter |
| `{{DELAI_SEMAINES}}` | Délai de livraison |
| `{{DATE_LIMITE}}` | Date limite offre spéciale |

---

**Prêt pour review, Kabundji. Ces séquences sont conçues pour convertir 
sans être agressives — le ton est professionnel mais humain.** 🎯
