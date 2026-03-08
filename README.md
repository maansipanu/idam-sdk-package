<!-- To publish package log in to the npm registry first -->
<!-- Open Powershell and then set -->
$env:GITHUB_TOKEN="your_personal_access_token_here" 
% to confirm type-
$env:GITHUB_TOKEN 
<!-- then type-  -->
npm publish

<!-- If you prefer interactive login instead of env var: -->
npm login --scope=@maansipanu --registry=https://npm.pkg.github.com
