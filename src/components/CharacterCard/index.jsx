import styles from './character-card.module.css';

export const CharacterCard = ({ character }) => {
	return (
		<div className={styles.container}>
			<div className={styles.imageContainer}>
				<img className={styles.image} src={`/${character.name}.png`} alt={character.name} />
			</div>

			<div className={styles.characterName}>
				<p>{character.name}</p>
			</div>
		</div>
	);
};
