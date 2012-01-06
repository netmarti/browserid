/*jshint browsers:true, forin: true, laxbreak: true */
/*global test: true, start: true, stop: true, module: true, ok: true, equal: true, BrowserID: true */
/* ***** BEGIN LICENSE BLOCK *****
 * Version: MPL 1.1/GPL 2.0/LGPL 2.1
 *
 * The contents of this file are subject to the Mozilla Public License Version
 * 1.1 (the "License"); you may not use this file except in compliance with
 * the License. You may obtain a copy of the License at
 * http://www.mozilla.org/MPL/
 *
 * Software distributed under the License is distributed on an "AS IS" basis,
 * WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License
 * for the specific language governing rights and limitations under the
 * License.
 *
 * The Original Code is Mozilla BrowserID.
 *
 * The Initial Developer of the Original Code is Mozilla.
 * Portions created by the Initial Developer are Copyright (C) 2011
 * the Initial Developer. All Rights Reserved.
 *
 * Contributor(s):
 *
 * Alternatively, the contents of this file may be used under the terms of
 * either the GNU General Public License Version 2 or later (the "GPL"), or
 * the GNU Lesser General Public License Version 2.1 or later (the "LGPL"),
 * in which case the provisions of the GPL or the LGPL are applicable instead
 * of those above. If you wish to allow use of your version of this file only
 * under the terms of either the GPL or the LGPL, and not to allow others to
 * use your version of this file under the terms of the MPL, indicate your
 * decision by deleting the provisions above and replace them with the notice
 * and other provisions required by the GPL or the LGPL. If you do not delete
 * the provisions above, a recipient may use your version of this file under
 * the terms of any one of the MPL, the GPL or the LGPL.
 *
 * ***** END LICENSE BLOCK ***** */
(function() {
  "use strict";

  var bid = BrowserID,
      screens = bid.Screens,
      el;

  module("shared/screens", {
    setup: function() {

    },

    teardown: function() {
      if (el) {
        el.empty();
      }
    }
  });

  test("form", function() {
    el = $("#formWrap .contents");
    el.empty();
    screens.form.show("testBodyTemplate");

    ok($("#templateInput").length, "the template has been written");
    equal($("body").hasClass("form"), true, "form class added to body");
    equal(screens.form.visible, true, "screen is visible");

    screens.form.hide();
    equal($("body").hasClass("form"), false, "form class removed from body");
    equal(screens.form.visible, false, "screen is not visible");
  });

  test("wait", function() {
    var el = $("#wait .contents");
    el.empty();
    screens.wait.show("testBodyTemplate");

    ok($("#templateInput").length, "the template has been written");
    equal($("body").hasClass("waiting"), true, "waiting class added to body");
    equal(screens.wait.visible, true, "screen is visible");

    screens.wait.hide();
    equal($("body").hasClass("waiting"), false, "waiting class removed from body");
    equal(screens.wait.visible, false, "screen is not visible");
  });

  test("error", function() {
    var el = $("#error .contents");
    el.empty();
    screens.error.show("testBodyTemplate");

    ok($("#templateInput").length, "the template has been written");
    equal($("body").hasClass("error"), true, "error class added to body");
    equal(screens.error.visible, true, "screen is visible");

    screens.error.hide();
    equal($("body").hasClass("error"), false, "error class removed from body");
    equal(screens.error.visible, false, "screen is not visible");
  });

  test("XHR 503 (server unavailable) error", function() {
    var el = $("#error .contents");
    el.empty();

    screens.error.show("error", {
      network: {
        status: 503
      }
    });

    ok($("#error_503").length, "503 header is shown");
  });
}());
