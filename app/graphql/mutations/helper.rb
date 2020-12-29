# frozen_string_literal: true

module Mutations
  class Helper
    class << self
      def convert_to_attributes(params, attribute)
        index = -1

        params[:"#{attribute}_attributes"] = params.delete(attribute).each_with_object({}) do |x, hash|
          hash[index += 1] = x.to_h
        end
      end

      def validation_messages(form, namespace = '')
        form.errors.to_hash(true).map do |attribute, messages|
          {
            field: "#{namespace}#{attribute.to_s.camelize(:lower)}",
            messages: messages
          }
        end.compact
      end
    end
  end
end
