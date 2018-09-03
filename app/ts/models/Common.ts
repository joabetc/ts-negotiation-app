import { Printable } from "./Printable";
import { Comparable } from "./Comparable";

export interface Common<T> extends Printable, Comparable<T> { }