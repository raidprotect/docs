import styles from './styles.module.css'

export default function Icon({ alt, title, src, width, height }: { alt: string, title: string, src: string, width?: number, height?: number }) {
    return <img className={styles.icon} src={src} alt={alt} title={title} width={width} height={height} />
}