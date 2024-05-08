import { writable } from "svelte/store";
import { browser } from "$app/environment";

export const lorem = writable( browser && ( localStorage.getItem(`lorem`) || `ipsum` ) );
lorem.subscribe( ( value ) => browser && value && ( localStorage.setItem(`lorem`, value)) )