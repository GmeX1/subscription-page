import { Button, Card, Group, Stack, Text, Title } from '@mantine/core'
import { useMemo } from 'react'

import { constructSubscriptionUrl } from '@shared/utils/construct-subscription-url'
import { useSubscription } from '@entities/subscription-info-store'
import { getColorGradient } from '@shared/utils/config-parser'
import { useCurrentLang } from '@entities/app-config-store'

const EMERALD_ACCENT = '#10b981'

const TEXTS = {
    ru: {
        title: 'Нужна помощь?',
        description:
            'Пишите в поддержку прямо здесь. Если Telegram недоступен — используйте запасной кабинет.',
        backup: '🛟 Запасной кабинет',
        bot: '💬 Наш бот'
    },
    en: {
        title: 'Need help?',
        description:
            'Contact support right here. If Telegram is unavailable, use the backup cabinet.',
        backup: '🛟 Backup cabinet',
        bot: '💬 Our bot'
    }
} as const

const readBackupBase = (): string => {
    const value = document.getElementById('sbpg-support')?.dataset.backup ?? ''
    // In production the backend injects a real URL; in other cases (dev, empty env)
    // the value is empty or an unrendered template placeholder — ignore it.
    return value.startsWith('http') ? value.replace(/\/+$/, '') : ''
}

interface IProps {
    botUrl: string
}

export const SupportCtaWidget = ({ botUrl }: IProps) => {
    const currentLang = useCurrentLang()
    const subscription = useSubscription()

    const backupBase = useMemo(readBackupBase, [])

    const subscriptionUrl = constructSubscriptionUrl(
        window.location.href,
        subscription.user.shortUuid
    )

    const backupUrl = backupBase
        ? `${backupBase}/c/sub?s=${encodeURIComponent(subscriptionUrl)}`
        : ''

    const hasBot = botUrl !== ''
    const hasBackup = backupUrl !== ''

    if (!hasBot && !hasBackup) {
        return null
    }

    const texts = currentLang === 'ru' ? TEXTS.ru : TEXTS.en

    return (
        <Card p={{ base: 'md', sm: 'lg' }} radius="lg" style={getColorGradient(EMERALD_ACCENT)}>
            <Stack gap="sm">
                <Title c="white" fw={600} order={4}>
                    {texts.title}
                </Title>
                <Text c="dimmed" size="sm">
                    {texts.description}
                </Text>

                <Group gap="sm" grow wrap="wrap">
                    {hasBackup && (
                        <Button
                            color="emerald"
                            component="a"
                            href={backupUrl}
                            radius="md"
                            rel="noopener noreferrer"
                            size="md"
                            target="_blank"
                            variant="filled"
                        >
                            {texts.backup}
                        </Button>
                    )}
                    {hasBot && (
                        <Button
                            color="emerald"
                            component="a"
                            href={botUrl}
                            radius="md"
                            rel="noopener noreferrer"
                            size="md"
                            target="_blank"
                            variant="light"
                        >
                            {texts.bot}
                        </Button>
                    )}
                </Group>
            </Stack>
        </Card>
    )
}
