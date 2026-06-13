<#
PowerShell script to send notification email with monitor log attached.
Usage:
  1. Edit the SMTP settings below or run and enter credentials when prompted.
  2. Run in PowerShell: `.\send_email.ps1`

This uses `Send-MailMessage` and will prompt for SMTP credentials.
#>

$smtpServer = Read-Host "SMTP server (e.g. smtp.gmail.com)"
$smtpPort = Read-Host "SMTP port (e.g. 587)"
$from = Read-Host "From address (e.g. no-reply@yourdomain.com)"
$to = "lucaspiano@gmail.com"
$subject = "artificialmusic.ai — domínio configurado e HTTPS ativo"

$body = @"
Olá,

O monitor de DNS/HTTPS para o domínio artificialmusic.ai concluiu com sucesso.

Resumo:
- DNS: apontando para Vercel (A records e CNAME configurados).
- HTTPS: conexões TLS estabelecidas e respostas 200 OK.

Logs anexados: monitor_https.log

Atenciosamente,
Seu script de monitoramento
"@

Write-Host "Você será solicitado a entrar com as credenciais SMTP (usuário e senha)." -ForegroundColor Cyan
$cred = Get-Credential -Message "SMTP credentials (username will be used as SMTP username)"

$attachment = Join-Path -Path (Get-Location) -ChildPath "monitor_https.log"
if (-Not (Test-Path $attachment)) {
    Write-Host "Aviso: arquivo monitor_https.log não encontrado na pasta atual." -ForegroundColor Yellow
}

Send-MailMessage -From $from -To $to -Subject $subject -Body $body -SmtpServer $smtpServer -Port ([int]$smtpPort) -UseSsl -Credential $cred -Attachments $attachment -BodyAsHtml:$false

Write-Host "E-mail enviado para $to (se as credenciais estiverem corretas)." -ForegroundColor Green
