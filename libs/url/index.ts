/*
    Helper Modules
*/
import extend from 'lodash/extend';
/*
    Interfaces
*/
import { UrlOptions, ImageKitOptions, FinalUrlOptions } from "../interfaces";
/*
    URL builder
*/
import builder from "./builder";

export default function (urlOpts: UrlOptions, defaultOptions: ImageKitOptions): string {
  var opts: FinalUrlOptions = extend({}, defaultOptions, urlOpts);

  return builder.buildURL(opts);
}
