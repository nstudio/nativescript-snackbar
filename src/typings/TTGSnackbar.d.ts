declare class TTGSnackbar extends UIView {
  static alloc(): TTGSnackbar; // inherited from NSObject

  static appearance(): TTGSnackbar; // inherited from UIAppearance

  static appearanceForTraitCollection(trait: UITraitCollection): TTGSnackbar; // inherited from UIAppearance

  static appearanceForTraitCollectionWhenContainedIn(
    trait: UITraitCollection,
    ContainerClass: typeof NSObject
  ): TTGSnackbar; // inherited from UIAppearance

  static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(
    trait: UITraitCollection,
    containerTypes: NSArray<typeof NSObject> | typeof NSObject[]
  ): TTGSnackbar; // inherited from UIAppearance

  static appearanceWhenContainedIn(
    ContainerClass: typeof NSObject
  ): TTGSnackbar; // inherited from UIAppearance

  static appearanceWhenContainedInInstancesOfClasses(
    containerTypes: NSArray<typeof NSObject> | typeof NSObject[]
  ): TTGSnackbar; // inherited from UIAppearance

  static new(): TTGSnackbar; // inherited from NSObject

  actionBlock: (p1: TTGSnackbar) => void;

  actionIcon: UIImage;

  actionMaxWidth: number;

  actionText: string;

  actionTextColor: UIColor;

  actionTextFont: UIFont;

  actionTextNumberOfLines: number;

  activityIndicatorViewColor: UIColor;

  activityIndicatorViewStyle: UIActivityIndicatorViewStyle;

  animationDuration: number;

  animationInitialSpringVelocity: number;

  animationSpringWithDamping: number;

  animationType: TTGSnackbarAnimationType;

  bottomMargin: number;

  containerView: UIView;

  contentInset: UIEdgeInsets;

  cornerRadius: number;

  customContentView: UIView;

  dismissBlock: (p1: TTGSnackbar) => void;

  duration: TTGSnackbarDuration;

  icon: UIImage;

  iconContentMode: UIViewContentMode;

  leftMargin: number;

  message: string;

  messageTextAlign: NSTextAlignment;

  messageTextColor: UIColor;

  messageTextFont: UIFont;

  onSwipeBlock: (
    p1: TTGSnackbar,
    p2: UISwipeGestureRecognizerDirection
  ) => void;

  onTapBlock: (p1: TTGSnackbar) => void;

  rightMargin: number;

  secondActionBlock: (p1: TTGSnackbar) => void;

  secondActionText: string;

  secondActionTextColor: UIColor;

  secondActionTextFont: UIFont;

  separateViewBackgroundColor: UIColor;

  shouldActivateLeftAndRightMarginOnCustomContentView: boolean;

  shouldDismissOnSwipe: boolean;

  topMargin: number;

  constructor(o: { message: string; duration: TTGSnackbarDuration });

  dismiss(): void;

  initWithMessageDuration(message: string, duration: TTGSnackbarDuration): this;

  show(): void;
}

declare const enum TTGSnackbarAnimationType {
  FadeInFadeOut = 0,

  SlideFromBottomToTop = 1,

  SlideFromBottomBackToBottom = 2,

  SlideFromLeftToRight = 3,

  SlideFromRightToLeft = 4,

  SlideFromTopToBottom = 5,

  SlideFromTopBackToTop = 6
}

declare const enum TTGSnackbarDuration {
  Short = 1,

  Middle = 3,

  Long = 5,

  Forever = 2147483647
}

declare var TTGSnackbarVersionNumber: number;

declare var TTGSnackbarVersionNumberVar: number;

declare var TTGSnackbarVersionString: interop.Reference<number>;

declare var TTGSnackbarVersionStringVar: interop.Reference<number>;
