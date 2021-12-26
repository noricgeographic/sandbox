import classes from "./CssModules.module.scss"

export const CssModules = () => {
   return (
     <>
      <p className={classes.title}>CSS Modulesです</p>
      <button className={classes.button}>ボタン</button>
     </>
   )
 }
