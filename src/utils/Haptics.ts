import * as Haptics from 'expo-haptics'

export function hapticsLight() {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
}

export function hapticsMedium() {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)
}

export function hapticsHeavy() {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy)
}

export function hapticsSuccess() {
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success)
}

export function hapticsError() {
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error)
}
