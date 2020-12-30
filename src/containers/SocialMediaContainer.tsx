import React from 'react'
import { Paper, createStyles, makeStyles, Theme } from '@material-ui/core'
// Utilities
import { urls } from '../util'

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		container: {
			background: '#666'
		},
		socialContainer: {
			display: 'flex',
			justifyContent: 'space-evenly',
			alignItems: 'center'
		},
		anchor: {
			textDecoration: 'none',
			color: 'black'
		},
		icon: {
			fontSize: '3em'
		}
	})
)

export default function SocialMediaContainer(): JSX.Element {
	const classes: Record<string, string> = useStyles()

	return (
		<Paper elevation={3} className={classes.container}>
			<div className={classes.socialContainer}>
				<a href={urls.github.url} className={classes.anchor} target="_blank" rel="noopener noreferrer">
					<i className={`devicon-github-original ${classes.icon}`}></i>
				</a>
				<a href={urls.instagram.url} target="_blank" rel="noopener noreferrer">
					<i className={`fab fa-instagram ${classes.icon}`}></i>
				</a>
				<a href={urls.linkedIn.url} target="_blank" rel="noopener noreferrer">
					<i className={`fab fa-linkedin ${classes.icon}`}></i>
				</a>
				<a href={urls.twitter.url} target="_blank" rel="noopener noreferrer">
					<i className={`fab fa-twitter ${classes.icon}`}></i>
				</a>
			</div>
		</Paper>
	)
}