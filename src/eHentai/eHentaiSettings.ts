import {
    Button,
    NavigationButton,
    SourceStateManager
} from 'paperback-extensions-common'

export const modifySearch = (stateManager: SourceStateManager): NavigationButton => {
    return createNavigationButton({
        id: 'modifySearch',
        value: '',
        label: 'Modify Search',
        form: createForm({
            onSubmit: async (values) => {
                stateManager.store('extraSearchArgs', values.extraSearchArgs.replace(/[“”‘’]/g, '"'))
            },
            validate: async () => true,
            sections: async () => {
                return [createSection({
                    id: 'modifySearchSection',
                    footer: 'Note: searches with only exclusions do not work, including on the home page',
                    rows: async () => {
                        return [createInputField({
                            id: 'extraSearchArgs',
                            value: (await stateManager.retrieve('extraSearchArgs') as string) ?? '',
                            placeholder: '-guro -"males only"',
                            label: 'Extra Args:',
                            maskInput: false
                        })]
                    }
                })]
            }
        })
    })
}

export const resetSettings = (stateManager: SourceStateManager): Button => {
    return createButton({
        id: 'resetSettings',
        label: 'Reset to Default',
        value: '',
        onTap: async () => {
            stateManager.store('extraSearchArgs', null)
        }
    })
}