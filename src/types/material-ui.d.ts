import { CSSProperties } from "@material-ui/core/styles/withStyles";

// interface declaration merging to add custom mixins
declare module '@material-ui/core/styles/createMixins' {
  interface Mixins {
    container: CSSProperties,
    form: CSSProperties,
  }
}
