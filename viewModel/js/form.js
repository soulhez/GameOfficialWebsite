/*
 * jQuery Form Example Plugin 1.5.2
 * Populate form inputs with example text that disappears on focus.
 *
 * e.g.
 *  $('input#name').example('Bob Smith');
 *  $('input[@title]').example(function() {
 *    return $(this).attr('title');
 *  });
 *  $('textarea#message').example('Type your message here', {
 *    className: 'example_text'
 *  });
 *
 * Copyright (c) Paul Mucur (http://mudge.name), 2007-2011.
 * Dual-licensed under the BSD (BSD-LICENSE.txt) and GPL (GPL-LICENSE.txt)
 * licenses.
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 */
(function(a){"use strict",a.fn.example=function(b,c){var d=a.isFunction(b),e=a.extend({},c,{example:b});return this.each(function(){var b,c,f=a(this);a.metadata?b=a.extend({},a.fn.example.defaults,f.metadata(),e):b=a.extend({},a.fn.example.defaults,e),c=function(){a(this).find("."+b.className).val("")},a.fn.example.boundClassNames[b.className]||(a(window).bind("unload.example",function(){a("."+b.className).val("")}),a.fn.on?a("body").on("submit.example","form",c):a.fn.delegate?a("body").delegate("form","submit.example",c):a.fn.live?a("form").live("submit.example",c):a("form").bind("submit.example",c),a.fn.example.boundClassNames[b.className]=!0),f.val()!==this.defaultValue&&(d||f.val()===b.example)&&f.val(this.defaultValue),f.val()===""&&!f.is(":focus")&&f.addClass(b.className).val(d?b.example.call(this):b.example),f.bind("focus.example",function(){a(this).is("."+b.className)&&a(this).val("").removeClass(b.className)}).bind("change.example",function(){a(this).is("."+b.className)&&a(this).removeClass(b.className)}).bind("blur.example",function(){a(this).val()===""&&a(this).addClass(b.className).val(d?b.example.call(this):b.example)})})},a.fn.example.defaults={className:"example"},a.fn.example.boundClassNames=[]})(jQuery);
