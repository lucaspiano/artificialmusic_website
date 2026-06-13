**Enviar Notificação por E-mail**

- **O que:** scripts prontos para enviar um e‑mail para `lucaspiano@gmail.com` com o `monitor_https.log` anexado.
- **Arquivos adicionados:**
  - [send_email.ps1](send_email.ps1) — PowerShell interativo (solicita servidor SMTP e credenciais).
  - [send_email_node.js](send_email_node.js) — Node.js usando `nodemailer` (usa variáveis de ambiente).

**PowerShell (rápido):**
1. Abra PowerShell na pasta do projeto.
2. Execute:

```powershell
.\send_email.ps1
```

3. Informe o servidor SMTP, porta e endereço `From`, e digite as credenciais quando solicitado.

**Node.js (recomendado quando usar uma conta de serviço):**
1. Instale dependência:

```bash
npm install nodemailer
```

2. Exporte variáveis de ambiente (exemplo Windows PowerShell):

```powershell
$env:SMTP_HOST="smtp.example.com"
$env:SMTP_PORT="587"
$env:SMTP_USER="your-smtp-user"
$env:SMTP_PASS="your-smtp-pass"
$env:FROM_EMAIL="no-reply@example.com"
node send_email_node.js
```

3. O script enviará o e‑mail e exibirá o resultado no console.

Se quiser, eu posso enviar o e‑mail para você automaticamente (opção A) se fornecer credenciais SMTP/API. Caso contrário, execute um dos scripts acima para enviar localmente.
