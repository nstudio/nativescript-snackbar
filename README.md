<a align="center" href="https://www.npmjs.com/package/@nstudio/nativescript-snackbar">
    <h2 align="center">NativeScript-Snackbar 🍭 🍫 🍦</h2>
</a>
<h4 align="center">
NativeScript plugin for Material Design SnackBar component.
</h4>

<p align="center">
    <a href="https://www.npmjs.com/package/@nstudio/nativescript-snackbar">
        <img src="https://github.com/nstudio/nativescript-snackbar/workflows/Build%20CI/badge.svg" alt="Action Build">
    </a>
    <a href="https://www.npmjs.com/package/@nstudio/nativescript-snackbar">
        <img src="https://img.shields.io/npm/v/@nstudio/nativescript-snackbar.svg" alt="npm">
    </a>
    <a href="https://www.npmjs.com/package/@nstudio/nativescript-snackbar">
        <img src="https://img.shields.io/npm/dt/@nstudio/nativescript-snackbar.svg?label=npm%20downloads" alt="npm">
    </a>
</p>

---

### Installation:

NativeScript 7+:
`tns plugin add @nstudio/nativescript-snackbar`

NativeScript version prior to 7:
`tns plugin add @nstudio/nativescript-snackbar@1.1.2`

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
    actionTextColor: '#ff4081',
    snackText: this.get('snackText'),
    textColor: '#346db2',
    hideDelay: 3500,
    backgroundColor: '#eaeaea',
    maxLines: 3, // Optional, Android Only
    isRTL: false,
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
npm run build

npm run demo.ios

// or...

npm run demo.android
```

## [Changelog](./CHANGELOG.md)

## [Contributing](./CONTRIBUTING.md)
