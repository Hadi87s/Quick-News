import React from 'react'

interface IGroup {
    group: string;
}

const OptionGroup = ({group}: IGroup) => {
    return (
        <option className='bg-neutral-900' value={group.toLowerCase()}>{group}</option>
    )
}

export default OptionGroup
