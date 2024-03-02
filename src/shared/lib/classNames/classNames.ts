/*
ПРИМЕР РАБОТЫ:
export function classNames(cls: string, mods, additional: string[]): string {

}

classNames('remove-btn', {hovered: true, selectable: true, red: false}, ['pdg'])

ПО ИТОГУ ПОЛУЧИМ: 'remove-btn hovered selectable pdg'
*/

type Mods = Record<string, string | boolean>

export function classNames(cls: string, mods?: Mods, additional?: string[]): string {
    return [cls,
        ...additional.filter(Boolean),
        Object.entries(mods).filter(([className, value]) => Boolean(value)).map(([className]) => className)].join(' ');
}
