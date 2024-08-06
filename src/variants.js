export const fadeIn = (direction, delay) =>{
    return{
        hidden: {
            opacity: 0,
            y: direction ==='up' ? 40 : direction ==='down' ? -40 : 0,
            x: direction ==='left' ? 100 : direction ==='right' ? -100 : 0
        },
        show: {
            y: 0,
            x: 0,
            opacity: 1,
            transition: {
                type: 'tween',
                duration: 0.8,
                delay: delay,
                ease: [0.25, 0.25, 0.25, 0.75]
            }
        }
    }
}
