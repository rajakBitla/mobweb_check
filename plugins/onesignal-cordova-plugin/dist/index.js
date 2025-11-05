cordova.define("onesignal-cordova-plugin.OneSignalPlugin", function(require, exports, module) { function a(o, s) {
  const e = o.indexOf(s);
  e !== -1 && o.splice(e, 1);
}
const i = () => {
};
var l = /* @__PURE__ */ ((o) => (o[o.None = 0] = "None", o[o.Fatal = 1] = "Fatal", o[o.Error = 2] = "Error", o[o.Warn = 3] = "Warn", o[o.Info = 4] = "Info", o[o.Debug = 5] = "Debug", o[o.Verbose = 6] = "Verbose", o))(l || {});
class c {
  /**
   * Enable logging to help debug if you run into an issue setting up OneSignal.
   * @param  {LogLevel} logLevel - Sets the logging level to print to the Android LogCat log or Xcode log.
   * @returns void
   */
  setLogLevel(s) {
    window.cordova.exec(i, i, "OneSignalPush", "setLogLevel", [s]);
  }
  /**
   * Enable logging to help debug if you run into an issue setting up OneSignal.
   * @param  {LogLevel} visualLogLevel - Sets the logging level to show as alert dialogs.
   * @returns void
   */
  setAlertLevel(s) {
    window.cordova.exec(i, i, "OneSignalPush", "setAlertLevel", [
      s
    ]);
  }
}
class d {
  constructor() {
    this._inAppMessageClickListeners = [], this._willDisplayInAppMessageListeners = [], this._didDisplayInAppMessageListeners = [], this._willDismissInAppMessageListeners = [], this._didDismissInAppMessageListeners = [];
  }
  _processFunctionList(s, e) {
    for (let n = 0; n < s.length; n++)
      s[n](e);
  }
  /**
   * Add event listeners for In-App Message click and/or lifecycle events.
   * @param event
   * @param listener
   * @returns
   */
  addEventListener(s, e) {
    if (s === "click") {
      this._inAppMessageClickListeners.push(
        e
      );
      const n = (t) => {
        this._processFunctionList(this._inAppMessageClickListeners, t);
      };
      window.cordova.exec(
        n,
        i,
        "OneSignalPush",
        "setInAppMessageClickHandler",
        []
      );
    } else if (s === "willDisplay") {
      this._willDisplayInAppMessageListeners.push(
        e
      );
      const n = (t) => {
        this._processFunctionList(
          this._willDisplayInAppMessageListeners,
          t
        );
      };
      window.cordova.exec(
        n,
        i,
        "OneSignalPush",
        "setOnWillDisplayInAppMessageHandler",
        []
      );
    } else if (s === "didDisplay") {
      this._didDisplayInAppMessageListeners.push(
        e
      );
      const n = (t) => {
        this._processFunctionList(this._didDisplayInAppMessageListeners, t);
      };
      window.cordova.exec(
        n,
        i,
        "OneSignalPush",
        "setOnDidDisplayInAppMessageHandler",
        []
      );
    } else if (s === "willDismiss") {
      this._willDismissInAppMessageListeners.push(
        e
      );
      const n = (t) => {
        this._processFunctionList(
          this._willDismissInAppMessageListeners,
          t
        );
      };
      window.cordova.exec(
        n,
        i,
        "OneSignalPush",
        "setOnWillDismissInAppMessageHandler",
        []
      );
    } else if (s === "didDismiss") {
      this._didDismissInAppMessageListeners.push(
        e
      );
      const n = (t) => {
        this._processFunctionList(this._didDismissInAppMessageListeners, t);
      };
      window.cordova.exec(
        n,
        i,
        "OneSignalPush",
        "setOnDidDismissInAppMessageHandler",
        []
      );
    }
  }
  /**
   * Remove event listeners for In-App Message click and/or lifecycle events.
   * @param event
   * @param listener
   * @returns
   */
  removeEventListener(s, e) {
    s === "click" ? a(this._inAppMessageClickListeners, e) : s === "willDisplay" ? a(this._willDisplayInAppMessageListeners, e) : s === "didDisplay" ? a(this._didDisplayInAppMessageListeners, e) : s === "willDismiss" ? a(this._willDismissInAppMessageListeners, e) : s === "didDismiss" && a(this._didDismissInAppMessageListeners, e);
  }
  /**
   * Add a trigger for the current user. Triggers are currently explicitly used to determine whether a specific IAM should be displayed to the user.
   * @param  {string} key
   * @param  {string} value
   * @returns void
   */
  addTrigger(s, e) {
    const n = { [s]: e };
    this.addTriggers(n);
  }
  /**
   * Add multiple triggers for the current user. Triggers are currently explicitly used to determine whether a specific IAM should be displayed to the user.
   * @param  {[key: string]: string} triggers
   * @returns void
   */
  addTriggers(s) {
    Object.keys(s).forEach(function(e) {
      typeof s[e] != "string" && (s[e] = JSON.stringify(s[e]));
    }), window.cordova.exec(i, i, "OneSignalPush", "addTriggers", [s]);
  }
  /**
   * Remove the trigger with the provided key from the current user.
   * @param  {string} key
   * @returns void
   */
  removeTrigger(s) {
    this.removeTriggers([s]);
  }
  /**
   * Remove multiple triggers from the current user.
   * @param  {string[]} keys
   * @returns void
   */
  removeTriggers(s) {
    Array.isArray(s) || console.error(
      "OneSignal: removeTriggers: argument must be of type Array"
    ), window.cordova.exec(i, i, "OneSignalPush", "removeTriggers", [s]);
  }
  /**
   * Clear all triggers from the current user.
   * @returns void
   */
  clearTriggers() {
    window.cordova.exec(i, i, "OneSignalPush", "clearTriggers");
  }
  /**
   * Set whether in-app messaging is currently paused.
   * When set to true no IAM will be presented to the user regardless of whether they qualify for them.
   * When set to 'false` any IAMs the user qualifies for will be presented to the user at the appropriate time.
   * @param  {boolean} pause
   * @returns void
   */
  setPaused(s) {
    window.cordova.exec(i, i, "OneSignalPush", "setPaused", [s]);
  }
  /**
   * Whether in-app messaging is currently paused.
   * @returns {Promise<boolean>}
   */
  getPaused() {
    return new Promise((s, e) => {
      window.cordova.exec(s, e, "OneSignalPush", "isPaused", []);
    });
  }
}
class u {
  /**
   * Enter a live activity
   * @param  {string} activityId
   * @param  {string} token
   * @param  {Function} onSuccess
   * @param  {Function} onFailure
   * @returns void
   */
  enter(s, e, n, t) {
    n == null && (n = i), t == null && (t = i), window.cordova.exec(
      n,
      t,
      "OneSignalPush",
      "enterLiveActivity",
      [s, e]
    );
  }
  /**
   * Exit a live activity
   * @param  {string} activityId
   * @param  {Function} onSuccess
   * @param  {Function} onFailure
   * @returns void
   */
  exit(s, e, n) {
    e == null && (e = i), n == null && (n = i), window.cordova.exec(
      e,
      n,
      "OneSignalPush",
      "exitLiveActivity",
      [s]
    );
  }
  /**
   * Indicate this device is capable of receiving pushToStart live activities for the
   * `activityType`. The `activityType` **must** be the name of the struct conforming
   * to `ActivityAttributes` that will be used to start the live activity.
   *
   * Only applies to iOS
   *
   * @param {string} activityType: The name of the specific `ActivityAttributes` structure tied
   * to the live activity.
   * @param {string} token: The activity type's pushToStart token.
   */
  setPushToStartToken(s, e) {
    window.cordova.exec(i, i, "OneSignalPush", "setPushToStartToken", [
      s,
      e
    ]);
  }
  /**
   * Indicate this device is no longer capable of receiving pushToStart live activities
   * for the `activityType`. The `activityType` **must** be the name of the struct conforming
   * to `ActivityAttributes` that will be used to start the live activity.
   *
   * Only applies to iOS
   *
   * @param {string} activityType: The name of the specific `ActivityAttributes` structure tied
   * to the live activity.
   */
  removePushToStartToken(s) {
    window.cordova.exec(i, i, "OneSignalPush", "removePushToStartToken", [
      s
    ]);
  }
  /**
   * Enable the OneSignalSDK to setup the default`DefaultLiveActivityAttributes` structure,
   * which conforms to the `OneSignalLiveActivityAttributes`. When using this function, the
   * widget attributes are owned by the OneSignal SDK, which will allow the SDK to handle the
   * entire lifecycle of the live activity.  All that is needed from an app-perspective is to
   * create a Live Activity widget in a widget extension, with a `ActivityConfiguration` for
   * `DefaultLiveActivityAttributes`. This is most useful for users that (1) only have one Live
   * Activity widget and (2) are using a cross-platform framework and do not want to create the
   * cross-platform <-> iOS native bindings to manage ActivityKit.
   *
   * Only applies to iOS
   *
   * @param {LiveActivitySetupOptions} options: An optional structure to provide for more granular setup options.
   */
  setupDefault(s) {
    window.cordova.exec(
      i,
      i,
      "OneSignalPush",
      "setupDefaultLiveActivity",
      [s]
    );
  }
  /**
   * Start a new LiveActivity that is modelled by the default`DefaultLiveActivityAttributes`
   * structure. The `DefaultLiveActivityAttributes` is initialized with the dynamic `attributes`
   * and `content` passed in.
   *
   * Only applies to iOS
   *
   * @param {string} activityId: The activity identifier the live activity on this device will be started
   * and eligible to receive updates for.
   * @param {object} attributes: A dynamic type containing the static attributes passed into `DefaultLiveActivityAttributes`.
   * @param {object} content: A dynamic type containing the content attributes passed into `DefaultLiveActivityAttributes`.
   */
  startDefault(s, e, n) {
    window.cordova.exec(
      i,
      i,
      "OneSignalPush",
      "startDefaultLiveActivity",
      [s, e, n]
    );
  }
}
class h {
  /**
   * Location
   */
  /**
   * Prompts the user for location permissions to allow geotagging from the OneSignal dashboard.
   * @returns void
   */
  requestPermission() {
    window.cordova.exec(
      i,
      i,
      "OneSignalPush",
      "requestLocationPermission",
      []
    );
  }
  /**
   * Disable or enable location collection (defaults to enabled if your app has location permission).
   * @param  {boolean} shared
   * @returns void
   */
  setShared(s) {
    window.cordova.exec(i, i, "OneSignalPush", "setLocationShared", [
      s
    ]);
  }
  /**
   * Whether location is currently shared with OneSignal.
   * @returns {Promise<boolean>}
   */
  isShared() {
    return new Promise((s, e) => {
      window.cordova.exec(
        s,
        e,
        "OneSignalPush",
        "isLocationShared",
        []
      );
    });
  }
}
class g {
  constructor(s) {
    this.notificationId = s.notificationId, this.body = s.body, this.title = s.title, this.additionalData = s.additionalData, typeof s.rawPayload == "string" ? this.rawPayload = JSON.parse(s.rawPayload) : this.rawPayload = s.rawPayload, this.launchURL = s.launchURL, this.sound = s.sound, s.actionButtons && (this.actionButtons = s.actionButtons), s.groupKey && (this.groupKey = s.groupKey), s.ledColor && (this.ledColor = s.ledColor), typeof s.priority < "u" && (this.priority = s.priority), s.smallIcon && (this.smallIcon = s.smallIcon), s.largeIcon && (this.largeIcon = s.largeIcon), s.bigPicture && (this.bigPicture = s.bigPicture), s.collapseId && (this.collapseId = s.collapseId), s.groupMessage && (this.groupMessage = s.groupMessage), s.fromProjectNumber && (this.fromProjectNumber = s.fromProjectNumber), s.smallIconAccentColor && (this.smallIconAccentColor = s.smallIconAccentColor), s.lockScreenVisibility && (this.lockScreenVisibility = s.lockScreenVisibility), s.androidNotificationId && (this.androidNotificationId = s.androidNotificationId), s.groupedNotifications && s.groupedNotifications.length && (this.groupedNotifications = s.groupedNotifications), s.badge && (this.badge = s.badge), s.category && (this.category = s.category), s.threadId && (this.threadId = s.threadId), s.subtitle && (this.subtitle = s.subtitle), s.templateId && (this.templateId = s.templateId), s.attachments && (this.attachments = s.attachments), s.templateName && (this.templateName = s.templateName), s.mutableContent && (this.mutableContent = s.mutableContent), s.badgeIncrement && (this.badgeIncrement = s.badgeIncrement), s.contentAvailable && (this.contentAvailable = s.contentAvailable), s.relevanceScore && (this.relevanceScore = s.relevanceScore), s.interruptionLevel && (this.interruptionLevel = s.interruptionLevel);
  }
  /**
   * Display the notification.
   * @returns void
   */
  display() {
    window.cordova.exec(i, i, "OneSignalPush", "displayNotification", [
      this.notificationId
    ]);
  }
}
class p {
  constructor(s) {
    this.notification = new g(s);
  }
  /**
   * Call this to prevent OneSignal from displaying the notification automatically.
   * This method can be called up to two times with false and then true, if processing time is needed.
   * Typically this is only possible within a short
   * time-frame (~30 seconds) after the notification is received on the device.
   * @param discard an [preventDefault] set to true to dismiss the notification with no
   * possibility of displaying it in the future.
   */
  preventDefault(s = !1) {
    window.cordova.exec(i, i, "OneSignalPush", "preventDefault", [
      this.notification.notificationId,
      s
    ]);
  }
  getNotification() {
    return this.notification;
  }
}
var w = /* @__PURE__ */ ((o) => (o[o.NotDetermined = 0] = "NotDetermined", o[o.Denied = 1] = "Denied", o[o.Authorized = 2] = "Authorized", o[o.Provisional = 3] = "Provisional", o[o.Ephemeral = 4] = "Ephemeral", o))(w || {});
class P {
  constructor() {
    this._permissionObserverList = [], this._notificationClickedListeners = [], this._notificationWillDisplayListeners = [];
  }
  _processFunctionList(s, e) {
    for (let n = 0; n < s.length; n++)
      s[n](e);
  }
  /**
   * Sets initial permission value and adds observer for changes.
   * This internal method is kept to support the deprecated method {@link hasPermission}.
   */
  _setPropertyAndObserver() {
    const s = (e) => {
      this._permission = e;
    };
    window.cordova.exec(
      s,
      i,
      "OneSignalPush",
      "getPermissionInternal"
    ), this.addEventListener("permissionChange", (e) => {
      this._permission = e;
    });
  }
  /**
   * @deprecated This method is deprecated. It has been replaced by {@link getPermissionAsync}.
   */
  hasPermission() {
    return this._permission || !1;
  }
  /**
   * Whether this app has push notification permission. Returns true if the user has accepted permissions,
   * or if the app has ephemeral or provisional permission.
   */
  getPermissionAsync() {
    return new Promise((s, e) => {
      window.cordova.exec(
        s,
        e,
        "OneSignalPush",
        "getPermissionInternal"
      );
    });
  }
  /** iOS Only.
   * Returns the enum for the native permission of the device. It will be one of:
   * OSNotificationPermissionNotDetermined,
   * OSNotificationPermissionDenied,
   * OSNotificationPermissionAuthorized,
   * OSNotificationPermissionProvisional - only available in iOS 12,
   * OSNotificationPermissionEphemeral - only available in iOS 14
   *
   * @returns {Promise<OSNotificationPermission>}
   *
   * */
  permissionNative() {
    return new Promise((s, e) => {
      window.cordova.exec(
        s,
        e,
        "OneSignalPush",
        "permissionNative",
        []
      );
    });
  }
  /**
   * Prompt the user for permission to receive push notifications. This will display the native system prompt to request push notification permission.
   * Use the fallbackToSettings parameter to prompt to open the settings app if a user has already declined push permissions.
   *
   *
   * @param  {boolean} fallbackToSettings
   * @returns {Promise<boolean>}
   */
  requestPermission(s) {
    let e = s ?? !1;
    return new Promise((n, t) => {
      window.cordova.exec(
        n,
        t,
        "OneSignalPush",
        "requestPermission",
        [e]
      );
    });
  }
  /**
   * Whether attempting to request notification permission will show a prompt. Returns true if the device has not been prompted for push notification permission already.
   * @returns {Promise<boolean>}
   */
  canRequestPermission() {
    return new Promise((s, e) => {
      window.cordova.exec(
        s,
        e,
        "OneSignalPush",
        "canRequestPermission",
        []
      );
    });
  }
  /**
   * iOS Only
   */
  /**
   * Instead of having to prompt the user for permission to send them push notifications, your app can request provisional authorization.
   *
   * For more information: https://documentation.onesignal.com/docs/ios-customizations#provisional-push-notifications
   *
   * @param  {(response: boolean)=>void} handler
   * @returns void
   */
  registerForProvisionalAuthorization(s = i) {
    window.cordova.exec(
      s,
      i,
      "OneSignalPush",
      "registerForProvisionalAuthorization",
      []
    );
  }
  /**
   * Add listeners for notification events.
   * @param event
   * @param listener
   * @returns
   */
  addEventListener(s, e) {
    if (s === "click") {
      this._notificationClickedListeners.push(
        e
      );
      const n = (t) => {
        this._processFunctionList(this._notificationClickedListeners, t);
      };
      window.cordova.exec(
        n,
        i,
        "OneSignalPush",
        "addNotificationClickListener",
        []
      );
    } else if (s === "foregroundWillDisplay") {
      this._notificationWillDisplayListeners.push(
        e
      );
      const n = (t) => {
        this._notificationWillDisplayListeners.forEach((r) => {
          r(new p(t));
        }), window.cordova.exec(
          i,
          i,
          "OneSignalPush",
          "proceedWithWillDisplay",
          [t.notificationId]
        );
      };
      window.cordova.exec(
        n,
        i,
        "OneSignalPush",
        "addForegroundLifecycleListener",
        []
      );
    } else if (s === "permissionChange") {
      this._permissionObserverList.push(e);
      const n = (t) => {
        this._processFunctionList(this._permissionObserverList, t);
      };
      window.cordova.exec(
        n,
        i,
        "OneSignalPush",
        "addPermissionObserver",
        []
      );
    }
  }
  /**
   * Remove listeners for notification events.
   * @param event
   * @param listener
   * @returns
   */
  removeEventListener(s, e) {
    s === "click" ? a(
      this._notificationClickedListeners,
      e
    ) : s === "foregroundWillDisplay" ? a(
      this._notificationWillDisplayListeners,
      e
    ) : s === "permissionChange" && a(
      this._permissionObserverList,
      e
    );
  }
  /**
   * Removes all OneSignal notifications.
   * @returns void
   */
  clearAll() {
    window.cordova.exec(
      i,
      i,
      "OneSignalPush",
      "clearAllNotifications",
      []
    );
  }
  /**
   * Android Only
   */
  /**
   * Android only.
   * Cancels a single OneSignal notification based on its Android notification integer ID. Use instead of Android's [android.app.NotificationManager.cancel], otherwise the notification will be restored when your app is restarted.
   * @param  {number} id - notification id to cancel
   * @returns void
   */
  removeNotification(s) {
    window.cordova.exec(i, i, "OneSignalPush", "removeNotification", [
      s
    ]);
  }
  /**
   * Android only.
   * Cancels a group of OneSignal notifications with the provided group key. Grouping notifications is a OneSignal concept, there is no [android.app.NotificationManager] equivalent.
   * @param  {string} id - notification group id to cancel
   * @returns void
   */
  removeGroupedNotifications(s) {
    window.cordova.exec(
      i,
      i,
      "OneSignalPush",
      "removeGroupedNotifications",
      [s]
    );
  }
}
class m {
  /**
   * Outcomes
   */
  /**
   * Add an outcome with the provided name, captured against the current session.
   * @param  {string} name
   * @returns void
   */
  addOutcome(s) {
    window.cordova.exec(i, i, "OneSignalPush", "addOutcome", [s]);
  }
  /**
   * Add a unique outcome with the provided name, captured against the current session.
   * @param  {string} name
   * @returns void
   */
  addUniqueOutcome(s) {
    window.cordova.exec(i, i, "OneSignalPush", "addUniqueOutcome", [
      s
    ]);
  }
  /**
   * Add an outcome with the provided name and value, captured against the current session.
   * @param  {string} name
   * @param  {number} value
   * @returns void
   */
  addOutcomeWithValue(s, e) {
    window.cordova.exec(i, i, "OneSignalPush", "addOutcomeWithValue", [
      s,
      e
    ]);
  }
}
class f {
  constructor() {
    this._subscriptionObserverList = [];
  }
  _processFunctionList(s, e) {
    for (let n = 0; n < s.length; n++)
      s[n](e);
  }
  /**
   * Sets initial Push Subscription properties and adds observer for changes.
   * This internal method is kept to support the deprecated methods {@link id}, {@link token}, {@link optedIn}.
   */
  _setPropertiesAndObserver() {
    const s = (t) => {
      this._id = t;
    };
    window.cordova.exec(
      s,
      i,
      "OneSignalPush",
      "getPushSubscriptionId"
    );
    const e = (t) => {
      this._token = t;
    };
    window.cordova.exec(
      e,
      i,
      "OneSignalPush",
      "getPushSubscriptionToken"
    );
    const n = (t) => {
      this._optedIn = t;
    };
    window.cordova.exec(
      n,
      i,
      "OneSignalPush",
      "getPushSubscriptionOptedIn"
    ), this.addEventListener("change", (t) => {
      this._id = t.current.id, this._token = t.current.token, this._optedIn = t.current.optedIn;
    });
  }
  /**
   * @deprecated This method is deprecated. It has been replaced by {@link getIdAsync}.
   */
  get id() {
    return console.warn(
      "OneSignal: This method has been deprecated. Use getIdAsync instead for getting push subscription id."
    ), this._id;
  }
  /**
   * @deprecated This method is deprecated. It has been replaced by {@link getTokenAsync}.
   */
  get token() {
    return console.warn(
      "OneSignal: This method has been deprecated. Use getTokenAsync instead for getting push subscription token."
    ), this._token;
  }
  /**
   * @deprecated This method is deprecated. It has been replaced by {@link getOptedInAsync}.
   */
  get optedIn() {
    return console.warn(
      "OneSignal: This method has been deprecated. Use getOptedInAsync instead for getting push subscription opted in status."
    ), this._optedIn || !1;
  }
  /**
   * The readonly push subscription ID.
   * @returns {Promise<string | null>}
   */
  getIdAsync() {
    return new Promise((s, e) => {
      window.cordova.exec(
        s,
        e,
        "OneSignalPush",
        "getPushSubscriptionId"
      );
    });
  }
  /**
   * The readonly push token.
   * @returns {Promise<string | null>}
   */
  getTokenAsync() {
    return new Promise((s, e) => {
      window.cordova.exec(
        s,
        e,
        "OneSignalPush",
        "getPushSubscriptionToken"
      );
    });
  }
  /**
   * Gets a boolean value indicating whether the current user is opted in to push notifications.
   * This returns true when the app has notifications permission and optOut() is NOT called.
   * Note: Does not take into account the existence of the subscription ID and push token.
   * This boolean may return true but push notifications may still not be received by the user.
   * @returns {Promise<boolean>}
   */
  getOptedInAsync() {
    return new Promise((s, e) => {
      window.cordova.exec(
        s,
        e,
        "OneSignalPush",
        "getPushSubscriptionOptedIn"
      );
    });
  }
  /**
   * Add a callback that fires when the OneSignal push subscription state changes.
   * @param  {(event: PushSubscriptionChangedState)=>void} listener
   * @returns void
   */
  addEventListener(s, e) {
    this._subscriptionObserverList.push(
      e
    );
    const n = (t) => {
      this._processFunctionList(this._subscriptionObserverList, t);
    };
    window.cordova.exec(
      n,
      i,
      "OneSignalPush",
      "addPushSubscriptionObserver",
      []
    );
  }
  /**
   * Remove a push subscription observer that has been previously added.
   * @param  {(event: PushSubscriptionChangedState)=>void} listener
   * @returns void
   */
  removeEventListener(s, e) {
    a(this._subscriptionObserverList, e);
  }
  /**
   * Call this method to receive push notifications on the device or to resume receiving of push notifications after calling optOut. If needed, this method will prompt the user for push notifications permission.
   * @returns void
   */
  optIn() {
    window.cordova.exec(i, i, "OneSignalPush", "optInPushSubscription");
  }
  /**
   * If at any point you want the user to stop receiving push notifications on the current device (regardless of system-level permission status), you can call this method to opt out.
   * @returns void
   */
  optOut() {
    window.cordova.exec(i, i, "OneSignalPush", "optOutPushSubscription");
  }
}
class O {
  constructor() {
    this.pushSubscription = new f(), this._userStateObserverList = [];
  }
  _processFunctionList(s, e) {
    for (let n = 0; n < s.length; n++)
      s[n](e);
  }
  /**
   * Explicitly set a 2-character language code for the user.
   * @param  {string} language
   * @returns void
   */
  setLanguage(s) {
    window.cordova.exec(i, i, "OneSignalPush", "setLanguage", [s]);
  }
  /**
   * Aliases
   */
  /**
   * Set an alias for the current user. If this alias label already exists on this user, it will be overwritten with the new alias id.
   * @param  {string} label
   * @param  {string} id
   * @returns void
   */
  addAlias(s, e) {
    const n = { [s]: e };
    window.cordova.exec(i, i, "OneSignalPush", "addAliases", [
      n
    ]);
  }
  /**
   * Set aliases for the current user. If any alias already exists, it will be overwritten to the new values.
   * @param {object} aliases
   * @returns void
   */
  addAliases(s) {
    window.cordova.exec(i, i, "OneSignalPush", "addAliases", [s]);
  }
  /**
   * Remove an alias from the current user.
   * @param  {string} label
   * @returns void
   */
  removeAlias(s) {
    window.cordova.exec(i, i, "OneSignalPush", "removeAliases", [s]);
  }
  /**
   * Remove aliases from the current user.
   * @param  {string[]} labels
   * @returns void
   */
  removeAliases(s) {
    window.cordova.exec(i, i, "OneSignalPush", "removeAliases", s);
  }
  /**
   * Email
   */
  /**
   * Add a new email subscription to the current user.
   * @param  {string} email
   * @returns void
   */
  addEmail(s) {
    window.cordova.exec(i, i, "OneSignalPush", "addEmail", [s]);
  }
  /**
   * Remove an email subscription from the current user. Returns false if the specified email does not exist on the user within the SDK, and no request will be made.
   * @param {string} email
   * @returns void
   */
  removeEmail(s) {
    window.cordova.exec(i, i, "OneSignalPush", "removeEmail", [s]);
  }
  /**
   * SMS
   */
  /**
   * Add a new SMS subscription to the current user.
   * @param  {string} smsNumber
   * @returns void
   */
  addSms(s) {
    window.cordova.exec(i, i, "OneSignalPush", "addSms", [s]);
  }
  /**
   * Remove an SMS subscription from the current user. Returns false if the specified SMS number does not exist on the user within the SDK, and no request will be made.
   * @param {string} smsNumber
   * @returns void
   */
  removeSms(s) {
    window.cordova.exec(i, i, "OneSignalPush", "removeSms", [s]);
  }
  /**
   * Tags
   */
  /**
   * Add a tag for the current user. Tags are key:value string pairs used as building blocks for targeting specific users and/or personalizing messages. If the tag key already exists, it will be replaced with the value provided here.
   * @param  {string} key
   * @param  {string} value
   * @returns void
   */
  addTag(s, e) {
    const n = { [s]: e };
    window.cordova.exec(i, i, "OneSignalPush", "addTags", [n]);
  }
  /**
   * Add multiple tags for the current user. Tags are key:value string pairs used as building blocks for targeting specific users and/or personalizing messages. If the tag key already exists, it will be replaced with the value provided here.
   * @param  {object} tags
   * @returns void
   */
  addTags(s) {
    const e = s;
    Object.keys(s).forEach(function(n) {
      typeof e[n] != "string" && (e[n] = JSON.stringify(e[n]));
    }), window.cordova.exec(i, i, "OneSignalPush", "addTags", [
      e
    ]);
  }
  /**
   * Remove the data tag with the provided key from the current user.
   * @param  {string} key
   * @returns void
   */
  removeTag(s) {
    window.cordova.exec(i, i, "OneSignalPush", "removeTags", [s]);
  }
  /**
   * Remove multiple tags with the provided keys from the current user.
   * @param  {string[]} keys
   * @returns void
   */
  removeTags(s) {
    window.cordova.exec(i, i, "OneSignalPush", "removeTags", s);
  }
  /** Returns the local tags for the current user.
   * @returns Promise<{ [key: string]: string }>
   */
  getTags() {
    return new Promise((s, e) => {
      window.cordova.exec(s, e, "OneSignalPush", "getTags", []);
    });
  }
  /**
   * Add a callback that fires when the OneSignal User state changes.
   * Important: When using the observer to retrieve the onesignalId, check the externalId as well to confirm the values are associated with the expected user.
   * @param  {(event: UserChangedState)=>void} listener
   * @returns void
   */
  addEventListener(s, e) {
    this._userStateObserverList.push(
      e
    );
    const n = (t) => {
      this._processFunctionList(this._userStateObserverList, t);
    };
    window.cordova.exec(
      n,
      i,
      "OneSignalPush",
      "addUserStateObserver",
      []
    );
  }
  /**
   * Remove a User State observer that has been previously added.
   * @param  {(event: UserChangedState)=>void} listener
   * @returns void
   */
  removeEventListener(s, e) {
    a(this._userStateObserverList, e);
  }
  /**
   * Get the nullable OneSignal Id associated with the current user.
   * @returns {Promise<string | null>}
   */
  getOnesignalId() {
    return new Promise((s, e) => {
      window.cordova.exec(
        s,
        e,
        "OneSignalPush",
        "getOnesignalId",
        []
      );
    });
  }
  /**
   * Get the nullable External Id associated with the current user.
   * @returns {Promise<string | null>}
   */
  getExternalId() {
    return new Promise((s, e) => {
      window.cordova.exec(
        s,
        e,
        "OneSignalPush",
        "getExternalId",
        []
      );
    });
  }
}
class S {
  constructor() {
    this.User = new O(), this.Debug = new c(), this.Session = new m(), this.Location = new h(), this.InAppMessages = new d(), this.Notifications = new P(), this.LiveActivities = new u(), this._appID = "";
  }
  /**
   * Initializes the OneSignal SDK. This should be called during startup of the application.
   * @param  {string} appId
   * @returns void
   */
  initialize(s) {
    this._appID = s;
    const e = () => {
      this.User.pushSubscription._setPropertiesAndObserver(), this.Notifications._setPropertyAndObserver();
    };
    window.cordova.exec(e, i, "OneSignalPush", "init", [
      this._appID
    ]);
  }
  /**
   * Login to OneSignal under the user identified by the [externalId] provided. The act of logging a user into the OneSignal SDK will switch the [user] context to that specific user.
   * @param  {string} externalId
   * @returns void
   */
  login(s) {
    window.cordova.exec(i, i, "OneSignalPush", "login", [s]);
  }
  /**
   * Logout the user previously logged in via [login]. The [user] property now references a new device-scoped user.
   * @param  {string} externalId
   * @returns void
   */
  logout() {
    window.cordova.exec(i, i, "OneSignalPush", "logout");
  }
  /**
   * Determines whether a user must consent to privacy prior to their user data being sent up to OneSignal. This should be set to true prior to the invocation of initialization to ensure compliance.
   * @param  {boolean} required
   * @returns void
   */
  setConsentRequired(s) {
    window.cordova.exec(
      i,
      i,
      "OneSignalPush",
      "setPrivacyConsentRequired",
      [s]
    );
  }
  /**
   * Indicates whether privacy consent has been granted. This field is only relevant when the application has opted into data privacy protections.
   * @param  {boolean} granted
   * @returns void
   */
  setConsentGiven(s) {
    window.cordova.exec(i, i, "OneSignalPush", "setPrivacyConsentGiven", [
      s
    ]);
  }
}
const b = new S();
window.plugins || (window.plugins = {});
window.plugins.OneSignal || (window.plugins.OneSignal = b);
export {
  l as LogLevel,
  p as NotificationWillDisplayEvent,
  g as OSNotification,
  w as OSNotificationPermission,
  S as OneSignalPlugin,
  b as default
};

});
