<a align="center" href="https://www.npmjs.com/package/@nstudio/nativescript-snackbar">
    <h2 align="center">NativeScript-Snackbar 🍭 🍫 🍦</h2>
</a>
<h4 align="center">
NativeScript plugin for Material Design SnackBar component.
</h4>

<p align="center">
    <a href="https://www.npmjs.com/package/@nstudio/nativescript-snackbar">
        <img src="https://img.shields.io/npm/v/@nstudio/nativescript-snackbar.svg" alt="npm">
    </a>
    <a href="https://www.npmjs.com/package/@nstudio/nativescript-snackbar">
        <img src="https://img.shields.io/npm/dt/@nstudio/nativescript-snackbar.svg?label=npm%20downloads" alt="npm">
    </a>
    <a href="https://github.com/nstudio/nativescript-snackbar/stargazers">
        <img src="https://img.shields.io/github/stars/nstudio/nativescript-snackbar.svg" alt="stars">
    </a>
     <a href="https://github.com/nstudio/nativescript-snackbar/network">
        <img src="https://img.shields.io/github/forks/nstudio/nativescript-snackbar.svg" alt="forks">
    </a>
    <a href="https://github.com/nstudio/nativescript-snackbar/blob/master/LICENSE">
        <img src="https://img.shields.io/github/license/nstudio/nativescript-snackbar.svg" alt="license">
    </a>
    <a href="http://nstudio.io">
      <img src="https://github.com/nstudio/media/blob/master/images/nstudio-banner.png?raw=true" alt="nStudio banner">
    </a>
    <h5 align="center">Do you need assistance on your project or plugin? Contact the nStudio team anytime at <a href="mailto:team@nstudio.io">team@nstudio.io</a> to get up to speed with the best practices in mobile and web app development.
    </h5>
</p>

---

### Installation:

`tns plugin add @nstudio/nativescript-snackbar`

## Demo

![Snackbar](./screens/snackbar.gif)

## Usage

### TS

```typescript
import { SnackBar, SnackBarOptions } from "@nstudio/nativescript-snackbar";

// Create an instance of SnackBar
const snackbar = new SnackBar();

/// Show a simple snackbar with no actions
public showSimple() {
    snackbar.simple('Snackbar', 'red', '#fff', 3, false).then((args) => {
         this.set('jsonResult', JSON.stringify(args));
   })
}

/// Show an Action snack bar
public showAction() {
  const options: SnackBarOptions = {
    actionText: this.get('actionText'),
    actionTextColor: '#ff4081', // Optional, Android only
    snackText: this.get('snackText'),
    textColor: '#346db2', // Optional, Android only
    hideDelay: 3500,
    backgroundColor: '#eaeaea', // Optional, Android only
    maxLines: 3, // Optional, Android Only
    isRTL: false, // Optional, Android Only
    view: <View>someView // Optional, Android Only, default to topmost().currentPage
  };

  snackbar.action(options).then((args) => {
    if (args.command === "Action") {
      this.set('jsonResult', JSON.stringify(args));
    } else {
      this.set('jsonResult', JSON.stringify(args));
    }
  });
}
```

### API

Show a simple SnackBar (color args will only work on Android)

- **simple(snackText: string, textColor?: string, backgroundColor?: string, maxLines?: number, isRTL?: boolean, view?: View): Promise<any>**

Show a SnackBar with Action.

- **action(options: SnackBarOptions): Promise<any>**

Manually dismiss an active SnackBar

- **dismiss(): Promise<any>**

### SnackBarOptions Interface

- **actionText: string**
- **actionTextColor: string**
- **snackText: string**
- **hideDelay: number**
- **textColor: string**
- **backgroundColor: string**
- **maxLines: number**
- **isRTL: boolean**
- **view: View**

## Run Demo

```bash
git clone https://github.com/nstudio/nativescript-snackbar.git
cd nativescript-snackbar/src
npm run setup

npm run demo.ios

// or...

npm run demo.android
```

## [Changelog](./CHANGELOG.md)

## [Contributing](./CONTRIBUTING.md)
