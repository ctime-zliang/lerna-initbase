import React, { useState } from 'react'
import { Button } from 'antd'
import style from './index.module.less'

function Counter(): any {
	const [count, setCount] = useState(0)
	const countClickAction = () => {
		setCount(count + 1)
	}
	return (
		<section className={style['counter-container']}>
			<span>Click this Button: </span>
			<Button type="primary" onClick={countClickAction}>
				Click Count {count}
			</Button>
		</section>
	)
}

export default React.memo(Counter) as any
