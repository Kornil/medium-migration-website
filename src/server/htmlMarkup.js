const htmlMarkup = markup => `
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Francesco Agnoletto</title>

  <meta name="mobile-web-app-capable" content="yes">
  <meta name="theme-color" content="#dfdfdf">
  <meta name="application-name" content="personal-website">
  <meta name="Description" content="Front end web engineer, click and check my work.">
  <link rel="manifest" href="/manifest.json">

  <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">

  <style>
    html,
    body,
    #root {
      margin: 0;
      height: 100%;
    }
  </style>

</head>

<body>
<div id="root">${markup}</div>
</body>
<script src="/bundle.js" defer></script>

</html>
`;

export default htmlMarkup;
