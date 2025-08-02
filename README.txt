
# FINAX Mobile PWA

Cette version est une Progressive Web App (PWA), que tu peux installer sur ton téléphone.

## Pour tester localement

1. Lancer un serveur local dans le dossier :
```bash
python -m http.server 8080
```

2. Ouvrir [http://localhost:8080](http://localhost:8080) dans un navigateur Chrome ou Edge

3. Une option "Installer l'application" apparaîtra

## Backend requis

Tu dois avoir ton API FastAPI déployée sur Render ou autre,
et mettre son URL dans `index.html` ligne `fetch("...")`
