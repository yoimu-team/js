import { useMemo } from 'react'
import { useGlobal } from '@/core/hooks/use-global'
import { mergeWords } from '@yoimu/common-lib'

export const Version = ({ className: pclassName }) => {
	const className = useMemo(
		() => mergeWords('p-3 text-center', pclassName && pclassName),
		[pclassName],
	)

	const version = useGlobal(e => e.version)

	return <div className={className}>{version}</div>
}
