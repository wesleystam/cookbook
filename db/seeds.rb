# frozen_string_literal: true

%w[
  Voorgerecht Bijgerecht Hoofdgerecht Hapje Nagerecht Cake Taart IJs Cupcake Ontbijt Scone Pannenkoek Gebak Jam Koek
  Brownie Saus Dip Brood Lunch Drank Amuse Bonbon Brunch
].each { |n| Course.create(name: n) }

%w[Winter Lente Sinterklaas Zomer Herfst Kerst Pasen Oud\ &\ nieuw].each { |n| Season.create(name: n) }
