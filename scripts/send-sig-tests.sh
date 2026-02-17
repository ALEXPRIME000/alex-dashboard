#!/bin/bash
export GOG_ACCOUNT=john.melo.testing01@gmail.com
export GOG_KEYRING_PASSWORD=openclaw

LOGOS_DIR="/home/ubuntu/.openclaw/workspace/assets/logos"

PG_B64=$(base64 -w0 "$LOGOS_DIR/pulse-graphix-logo.png")
NEXUS_B64=$(base64 -w0 "$LOGOS_DIR/nexus-ai-academy-logo.png")
CONGO_B64=$(base64 -w0 "$LOGOS_DIR/invest-in-congo-logo.png")
PA_B64=$(base64 -w0 "$LOGOS_DIR/pulse-architects-logo.png")

# Helper function
send_email() {
  local SUBJECT="$1"
  local HTML_FILE="$2"
  gog gmail send --to chicco007@gmail.com --subject "$SUBJECT" --body-html "$(cat "$HTML_FILE")" --no-input
}

# 1. PULSE GRAPHIX
cat > /tmp/sig-pg.html <<PGEOF
<div style="font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.7;color:#333;">
<p>Bonjour Monsieur Martin,</p>
<p>Suite à notre conversation téléphonique de ce matin, je me permets de vous envoyer notre proposition détaillée pour la création de votre site web professionnel.</p>
<p>Comme nous en avons discuté, un site vitrine moderne avec menu interactif et système de réservation en ligne pourrait considérablement augmenter votre visibilité locale et attirer de nouveaux clients.</p>
<p>Vous trouverez ci-joint notre devis personnalisé. N'hésitez pas à me contacter pour toute question.</p>
<p>Cordialement,</p>
<br>
<table cellpadding="0" cellspacing="0" border="0" style="max-width:600px;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.5;color:#231f20;">
<tr><td style="background:linear-gradient(90deg, #fff200 0%, #00a651 100%);height:4px;font-size:0;line-height:0;" colspan="2">&nbsp;</td></tr>
<tr><td style="padding:20px 0;" colspan="2">
<table cellpadding="0" cellspacing="0" border="0"><tr>
<td style="padding-right:20px;vertical-align:top;border-right:2px solid #00a651;">
<img src="data:image/png;base64,${PG_B64}" height="50" style="display:block;" alt="Pulse Graphix">
</td>
<td style="padding-left:20px;vertical-align:top;">
<div style="font-size:18px;font-weight:bold;color:#231f20;margin-bottom:2px;">Chicco Mutombo Kabundji</div>
<div style="font-size:13px;color:#00a651;font-weight:600;margin-bottom:12px;">Creative Director &amp; Founder</div>
<table cellpadding="0" cellspacing="0" border="0">
<tr><td style="padding-right:8px;padding-bottom:4px;font-size:13px;">📞</td><td style="padding-bottom:4px;font-size:13px;">+33 6 12 77 64 98</td></tr>
<tr><td style="padding-right:8px;padding-bottom:4px;font-size:13px;">✉️</td><td style="padding-bottom:4px;font-size:13px;">chicco007@gmail.com</td></tr>
<tr><td style="padding-right:8px;padding-bottom:4px;font-size:13px;">📍</td><td style="padding-bottom:4px;font-size:13px;">Paris, France</td></tr>
<tr><td style="padding-right:8px;padding-bottom:4px;font-size:13px;">🌐</td><td style="padding-bottom:4px;font-size:13px;"><a href="https://pulsegraphix.com" style="color:#00a651;text-decoration:none;font-weight:600;">pulsegraphix.com</a></td></tr>
</table>
</td></tr></table>
</td></tr>
<tr><td style="background:linear-gradient(90deg, #fff200 0%, #00a651 100%);height:2px;font-size:0;line-height:0;" colspan="2">&nbsp;</td></tr>
</table>
</div>
PGEOF

echo "Sending Pulse Graphix..."
send_email "🎨 [TEST v2] Pulse Graphix — Proposition site web" /tmp/sig-pg.html

# 2. NEXUS AI ACADEMY
cat > /tmp/sig-nexus.html <<NEXUSEOF
<div style="font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.7;color:#333;">
<p>Bonjour Marie,</p>
<p>Je vous contacte au sujet d'un partenariat potentiel entre nos deux organisations. Nexus AI Academy propose des formations en intelligence artificielle et automatisation adaptées aux besoins des entreprises.</p>
<p>Notre plateforme d'apprentissage propulsée par l'IA permet un parcours personnalisé pour chaque apprenant. Je serais ravi de vous présenter nos programmes lors d'un appel de 30 minutes.</p>
<p>Quel créneau vous conviendrait cette semaine ?</p>
<p>Bien cordialement,</p>
<br>
<table cellpadding="0" cellspacing="0" border="0" style="max-width:600px;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.5;color:#202f62;">
<tr><td style="background:linear-gradient(90deg, #202f62 0%, #1171b6 100%);height:4px;font-size:0;line-height:0;" colspan="2">&nbsp;</td></tr>
<tr><td style="padding:20px 0;" colspan="2">
<table cellpadding="0" cellspacing="0" border="0"><tr>
<td style="padding-right:20px;vertical-align:top;border-right:2px solid #1171b6;">
<img src="data:image/png;base64,${NEXUS_B64}" height="45" style="display:block;" alt="Nexus AI Academy">
</td>
<td style="padding-left:20px;vertical-align:top;">
<div style="font-size:18px;font-weight:bold;color:#202f62;margin-bottom:2px;">Chicco Mutombo Kabundji</div>
<div style="font-size:13px;color:#1171b6;font-weight:600;margin-bottom:12px;">Founder &amp; CEO</div>
<table cellpadding="0" cellspacing="0" border="0">
<tr><td style="padding-right:8px;padding-bottom:4px;font-size:13px;">📞</td><td style="padding-bottom:4px;font-size:13px;">+33 6 12 77 64 98</td></tr>
<tr><td style="padding-right:8px;padding-bottom:4px;font-size:13px;">✉️</td><td style="padding-bottom:4px;font-size:13px;">chicco007@gmail.com</td></tr>
<tr><td style="padding-right:8px;padding-bottom:4px;font-size:13px;">📍</td><td style="padding-bottom:4px;font-size:13px;">Paris, France</td></tr>
<tr><td style="padding-right:8px;padding-bottom:4px;font-size:13px;">🌐</td><td style="padding-bottom:4px;font-size:13px;"><a href="https://nexusaiacademy.app" style="color:#1171b6;text-decoration:none;font-weight:600;">nexusaiacademy.app</a></td></tr>
</table>
</td></tr></table>
</td></tr>
<tr><td style="background:linear-gradient(90deg, #202f62 0%, #1171b6 100%);height:2px;font-size:0;line-height:0;" colspan="2">&nbsp;</td></tr>
</table>
</div>
NEXUSEOF

echo "Sending Nexus AI Academy..."
send_email "🤖 [TEST v2] Nexus AI Academy — Partenariat formation IA" /tmp/sig-nexus.html

# 3. INVEST IN CONGO
cat > /tmp/sig-congo.html <<CONGOEOF
<div style="font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.7;color:#333;">
<p>Cher Monsieur Dubois,</p>
<p>Je me permets de vous contacter suite à votre intervention lors du Forum Afrique-France. Votre intérêt pour les marchés émergents africains rejoint parfaitement notre mission.</p>
<p>Invest in Congo accompagne les investisseurs internationaux dans leurs projets en RDC — de l'analyse de marché à l'implantation locale. Le Congo offre aujourd'hui des opportunités uniques dans les secteurs de la tech, de l'agro-industrie et des énergies renouvelables.</p>
<p>Je serais honoré de vous présenter notre dossier d'investissement lors d'une rencontre à votre convenance.</p>
<p>Respectueusement,</p>
<br>
<table cellpadding="0" cellspacing="0" border="0" style="max-width:600px;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.5;color:#031b46;">
<tr><td style="background:linear-gradient(90deg, #031b46 0%, #019bdc 50%, #cca04a 100%);height:4px;font-size:0;line-height:0;" colspan="2">&nbsp;</td></tr>
<tr><td style="padding:20px 0;" colspan="2">
<table cellpadding="0" cellspacing="0" border="0"><tr>
<td style="padding-right:20px;vertical-align:top;border-right:2px solid #019bdc;">
<img src="data:image/png;base64,${CONGO_B64}" height="55" style="display:block;" alt="Invest in Congo">
</td>
<td style="padding-left:20px;vertical-align:top;">
<div style="font-size:18px;font-weight:bold;color:#031b46;margin-bottom:2px;">Chicco Mutombo Kabundji</div>
<div style="font-size:13px;color:#019bdc;font-weight:600;margin-bottom:12px;">Investment Director</div>
<table cellpadding="0" cellspacing="0" border="0">
<tr><td style="padding-right:8px;padding-bottom:4px;font-size:13px;">📞</td><td style="padding-bottom:4px;font-size:13px;">+33 6 12 77 64 98</td></tr>
<tr><td style="padding-right:8px;padding-bottom:4px;font-size:13px;">✉️</td><td style="padding-bottom:4px;font-size:13px;">chicco007@gmail.com</td></tr>
<tr><td style="padding-right:8px;padding-bottom:4px;font-size:13px;">📍</td><td style="padding-bottom:4px;font-size:13px;">Paris, France</td></tr>
<tr><td style="padding-right:8px;padding-bottom:4px;font-size:13px;">🌐</td><td style="padding-bottom:4px;font-size:13px;"><a href="https://investincongo.com" style="color:#019bdc;text-decoration:none;font-weight:600;">investincongo.com</a></td></tr>
</table>
</td></tr></table>
</td></tr>
<tr><td style="background:linear-gradient(90deg, #031b46 0%, #019bdc 50%, #cca04a 100%);height:2px;font-size:0;line-height:0;" colspan="2">&nbsp;</td></tr>
</table>
</div>
CONGOEOF

echo "Sending Invest in Congo..."
send_email "🌍 [TEST v2] Invest in Congo — Opportunités d'investissement en RDC" /tmp/sig-congo.html

# 4. PULSE ARCHITECTS
cat > /tmp/sig-pa.html <<PAEOF
<div style="font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.7;color:#333;">
<p>Bonjour Madame Laurent,</p>
<p>Suite à notre rendez-vous de la semaine dernière sur le chantier, je vous transmets les plans préliminaires pour le projet « Les Jardins de Torcy ».</p>
<p>Vous trouverez en pièce jointe :</p>
<ul>
<li>Plans 2D (AutoCAD / Revit)</li>
<li>Rendus 3D photoréalistes (3ds Max / Corona)</li>
<li>Estimation budgétaire détaillée</li>
</ul>
<p>N'hésitez pas à me faire part de vos retours. Nous pouvons planifier une réunion de révision dès que vous le souhaitez.</p>
<p>Cordialement,</p>
<br>
<table cellpadding="0" cellspacing="0" border="0" style="max-width:600px;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.5;color:#222222;">
<tr><td style="background:linear-gradient(90deg, #000000 0%, #929497 100%);height:4px;font-size:0;line-height:0;" colspan="2">&nbsp;</td></tr>
<tr><td style="padding:20px 0;" colspan="2">
<table cellpadding="0" cellspacing="0" border="0"><tr>
<td style="padding-right:20px;vertical-align:top;border-right:2px solid #929497;">
<img src="data:image/png;base64,${PA_B64}" height="50" style="display:block;" alt="Pulse Architects">
</td>
<td style="padding-left:20px;vertical-align:top;">
<div style="font-size:18px;font-weight:bold;color:#222222;margin-bottom:2px;">Chicco Mutombo Kabundji</div>
<div style="font-size:13px;color:#929497;font-weight:600;margin-bottom:12px;">Lead Architect &amp; Founder</div>
<table cellpadding="0" cellspacing="0" border="0">
<tr><td style="padding-right:8px;padding-bottom:4px;font-size:13px;">📞</td><td style="padding-bottom:4px;font-size:13px;">+33 6 12 77 64 98</td></tr>
<tr><td style="padding-right:8px;padding-bottom:4px;font-size:13px;">✉️</td><td style="padding-bottom:4px;font-size:13px;">chicco007@gmail.com</td></tr>
<tr><td style="padding-right:8px;padding-bottom:4px;font-size:13px;">📍</td><td style="padding-bottom:4px;font-size:13px;">Paris, France</td></tr>
<tr><td style="padding-right:8px;padding-bottom:4px;font-size:13px;">🌐</td><td style="padding-bottom:4px;font-size:13px;"><a href="https://pulsearchitects.com" style="color:#929497;text-decoration:none;font-weight:600;">pulsearchitects.com</a></td></tr>
</table>
</td></tr></table>
</td></tr>
<tr><td style="background:linear-gradient(90deg, #000000 0%, #929497 100%);height:2px;font-size:0;line-height:0;" colspan="2">&nbsp;</td></tr>
</table>
</div>
PAEOF

echo "Sending Pulse Architects..."
send_email "🏗️ [TEST v2] Pulse Architects — Plans architecturaux Résidence Les Jardins" /tmp/sig-pa.html

echo "ALL DONE ✅"
